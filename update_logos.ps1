$root = "C:\Users\danis\Desktop\Danisy\Websites\One X Transmision BMW"
$files = Get-ChildItem -Path $root -Filter "*.html" -Recurse
$logoPattern = '<div class="logo-divider"></div>\s*<span class="bmw-logo"><img[^>]*bmw-logo\.svg[^>]*></span>'
$count = 0

foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $original = $content

    # Remove BMW logo divider + SVG span (handles single-line and multi-line)
    $content = [regex]::Replace($content, $logoPattern, '', [System.Text.RegularExpressions.RegexOptions]::Singleline)

    # Calculate relative depth and widget path
    $rel   = $f.FullName.Substring($root.Length + 1)
    $depth = ($rel.Split('\').Count - 1)
    if ($depth -eq 0) { $prefix = './' } else { $prefix = '../' * $depth }
    $widgetSrc = $prefix + 'asset/widgets.js'

    # Inject script tag before </body> if not already present
    if (-not ($content -match 'widgets\.js')) {
        $scriptTag = '<script src="' + $widgetSrc + '" defer></script>'
        $content = $content.Replace('</body>', $scriptTag + "`n</body>")
    }

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($f.FullName, $content, [System.Text.Encoding]::UTF8)
        $count++
        Write-Host ("  Updated: " + $rel)
    }
}
Write-Host ("`nDone - " + $count + " files modified.")
