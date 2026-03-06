$files = Get-ChildItem -Path "c:\Users\danis\Desktop\Danisy\One X Transmision BMW\site" -Filter "*.html" -Recurse
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    if ($file.DirectoryName -match "blog|services") {
        $rel = "../"
    } else {
        $rel = "./"
    }
    
    if (-not ($content -match "One_X_Transmission_Favicon")) {
        $content = $content.Replace("</head>", "<link rel=`"icon`" type=`"image/png`" href=`"${rel}asset/One_X_Transmission_Favicon-removebg-preview.png`">`n</head>")
    }
    
    $logoText = "<h1>One X <span>Transmision</span> BMW</h1>"
    $logoImg = "<a href=`"/`" class=`"brand-logo`"><img src=`"${rel}asset/logo-white.png`" alt=`"One X Transmission`"></a>"
    $content = $content.Replace($logoText, $logoImg)
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
Write-Host "Done Script"
