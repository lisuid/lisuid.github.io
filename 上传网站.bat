@echo off
echo ======================================================
echo iCat �������è
echo https://meuicat.com
echo ======================================================
echo �������ѣ�ȷ���Ƿ��ϴ���
echo 1. ��ͨ�ϴ�
echo 2. �����ϴ�
echo 3. ���ٿ���
echo.
set /p input="�������Ӧ���֣�"
if %input%==1 goto A
if %input%==2 goto B
if %input%==3 goto C

:A
start cmd.exe /k "@echo off && hexo d && echo. && echo ������ִ����ɣ�������������� && pause && exit"
exit

:B
start cmd.exe /k "@echo off && hexo clean && hexo g && hexo d && echo. && echo ������ִ����ɣ�������������� && pause && exit"
exit

:C
exit

pause

