@echo off
cd /d "%~dp0"
chcp 65001 >nul
title J.A.R.V.I.S - Erum Tech Core Kurulum
color 0B

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║                                                          ║
echo ║     ██╗ █████╗ ██████╗ ██╗   ██╗██╗███████╗              ║
echo ║     ██║██╔══██╗██╔══██╗██║   ██║██║██╔════╝              ║
echo ║     ██║███████║██████╔╝██║   ██║██║███████╗              ║
echo ║██   ██║██╔══██║██╔══██╗╚██╗ ██╔╝██║╚════██║              ║
echo ║╚█████╔╝██║  ██║██║  ██║ ╚████╔╝ ██║███████║              ║
echo ║ ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝              ║
echo ║                                                          ║
echo ║          Erum Tech Core - Yapay Zeka Asistan             ║
echo ║                                                          ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

echo [*] Python kontrol ediliyor...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] HATA: Python bulunamadi!
    echo [!] Lutfen Python 3.8+ yukleyin: https://www.python.org/downloads/
    echo [!] Kurulumda "Add Python to PATH" secenegini isaretlemeyi unutmayin!
    echo.
    pause
    exit /b 1
)

for /f "tokens=2" %%a in ('python --version 2^>^&1') do set PYVER=%%a
echo [OK] Python %PYVER% bulundu.
echo.

echo [*] pip kontrol ediliyor...
pip --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] HATA: pip bulunamadi!
    echo [!] Python'u yeniden yuklerken pip secenegini isaretleyin.
    pause
    exit /b 1
)
echo [OK] pip bulundu.
echo.

echo ═══════════════════════════════════════════════════
echo [*] Gerekli kutuphaneler yukleniyor...
echo    (Bu islem ilk seferde birkaç dakika surebilir)
echo ═══════════════════════════════════════════════════
echo.

pip install pyttsx3 >nul 2>&1
echo    [OK] pyttsx3
pip install wikipedia >nul 2>&1
echo    [OK] wikipedia
pip install SpeechRecognition >nul 2>&1
echo    [OK] SpeechRecognition
pip install requests >nul 2>&1
echo    [OK] requests
pip install beautifulsoup4 >nul 2>&1
echo    [OK] beautifulsoup4
pip install psutil >nul 2>&1
echo    [OK] psutil
pip install pyjokes >nul 2>&1
echo    [OK] pyjokes
pip install geocoder >nul 2>&1
echo    [OK] geocoder
pip install Pillow >nul 2>&1
echo    [OK] Pillow
pip install PyAutoGUI >nul 2>&1
echo    [OK] PyAutoGUI
pip install pytube >nul 2>&1
echo    [OK] pytube
pip install opencv-contrib-python >nul 2>&1
echo    [OK] opencv-contrib-python
pip install pypiwin32 >nul 2>&1
echo    [OK] pypiwin32
pip install comtypes >nul 2>&1
echo    [OK] comtypes

echo.
echo ═══════════════════════════════════════════════════
echo [OK] Tum kutuphaneler basariyla yuklendi!
echo ═══════════════════════════════════════════════════
echo.

echo [*] PyAudio yukleniyor (ozel kurulum)...
pip install PyAudio >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] PyAudio pip ile yuklenemedi, .whl dosyasi deneniyor...
    if exist "PyAudio-0.2.11-cp38-cp38-win_amd64.whl" (
        pip install PyAudio-0.2.11-cp38-cp38-win_amd64.whl >nul 2>&1
        if %errorlevel% neq 0 (
            echo [UYARI] PyAudio yuklenemedi. Ses tanima calismayabilir.
            echo [UYARI] Manuel kurulum: pip install pipwin ^&^& pipwin install pyaudio
        ) else (
            echo    [OK] PyAudio (.whl)
        )
    ) else (
        echo [UYARI] PyAudio yuklenemedi. Ses tanima calismayabilir.
        echo [UYARI] Manuel: pip install pipwin ^&^& pipwin install pyaudio
    )
) else (
    echo    [OK] PyAudio
)

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║                                                          ║
echo ║   [OK] Kurulum tamamlandi!                              ║
echo ║   [*]  J.A.R.V.I.S baslatiliyor...                      ║
echo ║                                                          ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

python jarvis.py

if %errorlevel% neq 0 (
    echo.
    echo [!] JARVIS calistirilirken bir hata olustu.
    echo [!] Lutfen hata mesajini kontrol edin.
    echo.
    pause
)
