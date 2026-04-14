# 专家模式安装
普通模式和专家模式的配置分别放在 `/config-overrides/normal` 和 `/config-overrides/expert`。

你可以用下面任一方式替换配置：
## 手动
- 把 `/config-overrides/expert` 里的文件拖到主 `config` 文件夹里。
- 必须覆盖已有文件。
- macOS 不要整文件夹替换，改为合并。
![image](https://user-images.githubusercontent.com/61507029/168111281-65006a94-4b4d-4255-aca1-1f5039eec705.png)

## 自动安装
### Windows
1. 仅限 CurseForge 下载版。下载 [pack-mode-switcher.bat](https://raw.githubusercontent.com/Nomi-CEu/Nomi-CEu/main/pack-mode-switcher.bat)，放到整合包根目录，也就是和 `config` 同级的位置。
2. 在该目录运行 `./pack-mode-switcher.bat`。

### Mac / GNU / Linux
1. 仅限 CurseForge 下载版。运行 `curl -O https://raw.githubusercontent.com/Nomi-CEu/Nomi-CEu/main/pack-mode-switcher.sh` 下载脚本，或直接下载 [pack-mode-switcher.sh](https://raw.githubusercontent.com/Nomi-CEu/Nomi-CEu/main/pack-mode-switcher.sh)。
2. 在整合包根目录执行 `chmod +x pack-mode-switcher.sh; sh pack-mode-switcher.sh`。
