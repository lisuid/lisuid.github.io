@echo off
echo ======================================================
echo iCat 爱吃肉的猫
echo https://meuicat.com
echo ======================================================
echo 二次提醒：确定是否上传？
echo 1. 普通上传
echo 2. 生成上传
echo 3. 我再看看
echo.
set /p input="请输入对应数字："
if %input%==1 goto A
if %input%==2 goto B
if %input%==3 goto C

:A
start cmd.exe /k "@echo off && hexo d && echo. && echo 命令已执行完成，如出错请检查配置 && pause && exit"
exit

:B
start cmd.exe /k "@echo off && hexo clean && hexo g && hexo d && echo. && echo 命令已执行完成，如出错请检查配置 && pause && exit"
exit

:C
exit

pause

