<p align="center"><img src="https://raw.githubusercontent.com/Nomi-CEu/Branding/refs/heads/main/Nomi%20CEu/Logo/256x/logo-normal.png" alt="Logo"></p>
<h1 align="center">Nomi-CEu</h1>
<p align="center"><b><i>基于 <a href="https://github.com/Nomifactory/Nomifactory">Nomifactory</a> 的分支，采用 <a href="https://github.com/GregTechCEu/GregTech">GregTech CEu</a> 及其相关模组。</i></b></p>
<h1 align="center">
    <a href="https://github.com/Nomi-CEu/Nomi-CEu/"><img src="https://img.shields.io/github/stars/Nomi-CEu/Nomi-CEu?style=for-the-badge&logo=github&logoColor=white" alt="Stars"></a>
    <a href="https://nightly.link/Nomi-CEu/Nomi-CEu/workflows/testbuildpack/main"><img src="https://img.shields.io/github/last-commit/Nomi-CEu/Nomi-CEu/main?style=for-the-badge&logo=githubactions&logoColor=white&label=Nightly%20Builds&color=%238a67ab" alt="Builds"></a>
    <a href="https://discord.com/invite/zwQzqP8b6q"><img src="https://img.shields.io/discord/927050775073534012?style=for-the-badge&logo=discord&logoColor=%23ffffff&label=discord%20&labelColor=gray&color=%235865F2" alt="Discord"></a>
    <br>
    <a href="https://www.curseforge.com/minecraft/modpacks/nomi-ceu"><img src="https://cf.way2muchnoise.eu/nomi-ceu.svg?badge_style=for_the_badge" alt="CurseForge"></a>
    <a href="https://www.curseforge.com/minecraft/modpacks/nomi-ceu"><img src="https://cf.way2muchnoise.eu/versions/For%20MC_nomi-ceu_all.svg?badge_style=for_the_badge" alt="MC Versions"></a>
    <a href="https://github.com/Nomi-CEu/Nomi-CEu/releases"><img src="https://img.shields.io/github/downloads/Nomi-CEu/Nomi-CEu/total?sort=semver&logo=github&label=&style=for-the-badge&color=2d2d2d&labelColor=545454&logoColor=FFFFFF" alt="GitHub"></a>
</h1>

## 特性
- 持续更新的 GregTech CEu 及相关模组
- 重做后的任务、进度和配平
- 更贴近 CEu 原版思路的电路进阶
- 几乎所有机器都有多方块版本，最高支持 256 并行
- 新的处理链：Naquadah、进阶 SMD、水晶芯片等
- 修复了不少旧版 CE 的麻烦问题
- 机器、线圈、聚变反应堆等支持高性能发光效果
- 引入并改良了 Assembly Line Research、Cleanroom 等 GT5 特性
- 更新后的任务书，新增 Processing Lines 章节
- 多项便利优化，例如任意线材、创意储罐等

## 翻译包
中文等翻译以独立语言包提供，下载见 [这里](https://nightly.link/Nomi-CEu/Nomi-CEu-Translations/workflows/pushbuildpack/main?preview)，请选择 `nomi-ceu` 压缩包。
更多语言状态见 [翻译仓库](https://github.com/Nomi-CEu/Nomi-CEu-Translations/)。

## 安装与自定义
安装、更新和自定义说明见 [Wiki](https://github.com/Nomi-CEu/Nomi-CEu/wiki)。
## 自定义模组
如果你要自己加 mod，优先把 CurseForge 的 `projectID` 和 `fileID` 写进 [manifest.json](manifest.json)。客户端专用模组用 `sides: ["client"]`，只给服务器用的模组用 `sides: ["server"]`，两边都要的模组就不要写 `sides`。

像 StackUp 这类需要额外配置的模组，第一次启动后要把生成的配置文件一并提交到 `overrides/config`，否则只加依赖不改配置，效果可能还是默认值。

## 服务器
基础服务器搭建、管理和更新说明见 [Wiki](https://github.com/Nomi-CEu/Nomi-CEu/wiki/Page-1:-Player-Information#section-3-server-installation-and-updating)。

## 贡献
贡献和维护说明见 [Wiki](https://github.com/Nomi-CEu/Nomi-CEu/wiki/Part-2:-Contributing-Information)。

## 扩展模组
下面这些模组有配套脚本，把它们放进 mods 文件夹后，配方会自动调整。

- [AE2 Fluid Crafting Rework](https://www.curseforge.com/minecraft/mc-mods/ae2-fluid-crafting-rework)
- [Compact Machines](https://www.curseforge.com/minecraft/mc-mods/compact-machines)
- [Flux Networks](https://www.curseforge.com/minecraft/mc-mods/flux-networks)
- [Lazy AE2](https://www.curseforge.com/minecraft/mc-mods/lazy-ae2)
- [Project Red - Illumination](https://www.curseforge.com/minecraft/mc-mods/project-red-illumination)
- [ZBGT](https://www.curseforge.com/minecraft/mc-mods/zbgt)

注：如果你通过 CurseForge App 安装，请删掉它多下的 AE2 普通版，只保留 extended life 版本。

## 专家模式
如果你想要更难一些，或者更接近“纯粹” GregTech 的体验，可以使用专家模式。它基于原版整合包的 [Self-Torture Edition Fork](https://github.com/NotMyWing/Omnifactory-Self-Torture-Edition)。

### 主要差异
- 强制和平模式
- 不提供 DME 的轻松无限资源
- Nomicoin 不能获得，也不能花费
- 加入蒸汽时代
- 更强调 GT 发电
- 不再提供创意储罐，后期改为稳定微型采矿机
- 若干配方更难，例如铱、石墨烯、数控动态机等

### 安装
#### 脚本安装

Windows：
1. 仅限 CurseForge 下载版。下载 [pack-mode-switcher.bat](https://raw.githubusercontent.com/Nomi-CEu/Nomi-CEu/main/pack-mode-switcher.bat)，放到整合包根目录，也就是和 `config` 同级的位置。
2. 在该目录运行 `./pack-mode-switcher.bat`。

Mac / GNU / Linux：
1. 仅限 CurseForge 下载版。下载 [pack-mode-switcher.sh](https://raw.githubusercontent.com/Nomi-CEu/Nomi-CEu/main/pack-mode-switcher.sh)，或用 `curl -O` 获取。
2. 在整合包根目录执行 `chmod +x pack-mode-switcher.sh; sh pack-mode-switcher.sh`。

#### 手动安装
手动安装说明见 [overrides/README.md](overrides/README.md)。

## 致谢
原始整合包作者 [Exaxxion](https://github.com/Exaxxion)。
稳定矿机纹理来自 [Self-Torture Edition](https://github.com/NotMyWing/Omnifactory-Self-Torture-Edition)。
README 基础来自 [GregTech CEu](https://github.com/GregTechCEu/GregTech)。
部分新任务来自 [GregTech Community Pack](https://github.com/GregTechCEu/GregTech-Community-Pack)。
GTCE 到 GTCEu 的物品 ID 转换脚本来自 [brachy84](https://github.com/brachy84)。
完美宝石纹理来自 [FurfSky Reborn](http://furfsky.net/)。
部分硬核模式配方链和 Magnetron 纹理来自 [GCY Science](https://github.com/GregTechCEu/gregicality-science)。
Flux Networks 兼容配方来自 [smudgerox](https://github.com/smudgerox)。
