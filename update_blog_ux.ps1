$blogDir = "c:\Users\danis\Desktop\Danisy\One X Transmision BMW\site\blog"
$files = Get-ChildItem -Path $blogDir -Filter "*.html"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Add reading progress bar after <body> if not already present
    if (-not ($content -match "reading-progress")) {
        $content = $content.Replace("<body>", "<body>`n<div class=`"reading-progress`"></div>")
    }
    
    # Add back-to-top + JS before </body> if not already present
    if (-not ($content -match "blog-ux\.js")) {
        $content = $content.Replace("</body>", "<button class=`"back-to-top`" aria-label=`"Back to top`">↑</button>`n<script src=`"../js/blog-ux.js`" defer></script>`n</body>")
    }
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
Write-Host "Blog UX injected into $($files.Count) blog files."
