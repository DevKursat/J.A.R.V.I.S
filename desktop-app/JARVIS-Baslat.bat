@echo off
cd /d "%~dp0"
chcp 65001 >nul
title J.A.R.V.I.S - Hizli Baslat
color 0B

echo.
echo [*] J.A.R.V.I.S baslatiliyor...
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Python bulunamadi! Once JARVIS-Kur.bat dosyasini calistirin.
    pause
    exit /b 1
)

python jarvis.py

if %errorlevel% neq 0 (
    echo.
    echo [!] Hata olustu. Once JARVIS-Kur.bat ile kurulum yapin.
    pause
)
