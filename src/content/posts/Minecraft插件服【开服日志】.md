---
title: Minecraft插件配置【开服日志】 #  设置文章标题
published: 2025-05-09 21:27:58             # 设置发布时间（默认不设）
top_img: false  
# cover: https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/EXPLORE_PDPScreenshotRefresh2024_multipleBiomes_01.png           # 设置文章封面
tags: [插件,MC]                                # 添加分类
category: Minecraft
slug: "f8b9420c"
---

> **文章内容**
>1. 涉及到了新手开服的插件推荐与相关配置教程。
>2. 玩转各大好用的插件，用最简便的方法，展示出最佳的效果。

# 前言
1. 上个月又染上了MC，并在别人的服务器找到了灵感，于是我和朋友合资搞了一个3个月的服务器开一个插件服，我们是这样打算的，开一个永久不关的存档。
2. 我去过很多他人的服务器，看着他们各种各样的插件，我也就有了美化服务器的打算，毕竟是插件服...


# 插件推荐
> 废话就不多说，来讲一下我都用过哪些好用的插件吧！

## TAB (TAB面板美化插件)
- 兼容版本：`1.21.5` ~ `1.5.1`
- 兼容核心：`paper`,`Waterfall`，`Velocity`，`Sponge`，`Spigot`，`Quilt`，`Purpur`....
- 使用文档：[TAB-wiki](https://docs.superiormc.cn/tab-wiki)
- 下载地址1：[TAB（Modrinth）](https://modrinth.com/plugin/tab-was-taken)
- 下载地址2：[TAB（Spigot）](https://www.spigotmc.org/resources/tab-1-5-1-21-5.57806/)

![sss](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_plugins_1.png)

1. 首先是TAB美化插件：[TAB (一个有效的一体化解决方案)](https://modrinth.com/plugin/tab-was-taken)
2. TAB是一个用于在不同位置显示信息的多功能插件，旨在在功能、兼容性和性能方面超越所有类似的插件。按照我的理解，它具备了美化TAB面板，记分板，和展示玩家名称前后缀，玩家ping值和头顶数值等功能。


3. 关于它的配置项也十分的简单，这里只展示部分实用的功能:
> `/tab debug`：输出玩家的信息
### TAB面板美化
1. 我们可以在服务器核心的`plugins/TAB/config.yml`文件中对`header-footer`进行修改，改配置项对应的是TAB面板，你可以根据信息内容按照自己的想法进行修改：
2. 其中里面用到了许多变量：`%staffonline%`（在线管理员人数），`%online%`（在线玩家人数），`%player%`（我的名称），`%memory-used%``（占用内存），`%memory-max%`（最大内存），`%world%`（所在世界）等，
```yml
# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Header-&-Footer
header-footer:
  enabled: true
  header:
    - "&d&l《佳莉敦の世界》"
    - "<#FFFFFF>&m                                        </#FFFF00>"
    #- "&f-------------------------"
    # - "&r&7&l>> %animation:Welcome%&3 &l%player%&7&l! &7&l<<"
    # - "&6在线管理员: &e%staffonline%"
    - "&r&b在线人数: &f%online%"
    - ""
  footer:
    # - "%animation:time%"
    # - "&2Ping: %ping%"
    # - "&7&l 内存监控: %memory-used% MB / %memory-max% MB"
    #- "&f-------------------------"
    - ""
    - "&b玩家QQ群：&a1153119841"
    - "<#FFFFFF>&m                                        </#FFFF00>"
  disable-condition: '%world%=disabledworld'
  per-world:
    world1:
      header:
        - "an example of world with custom"
      footer:
        - "header/footer and prefix/suffix"
    world2;world3:
      header:
        - "This is a shared header for"
        - "world2 and world3"
  per-server:
    server1:
      header:
        - "an example of server with custom header"
```

3. 通过启用`playerlist-objective`，我们可以在TAB中显示其他玩家和自己的延迟。
```yml
playerlist-objective:
  enabled: true
  value: "%ping%"
  fancy-value: "&7Ping: %ping%"
  title: "Java Edition is better"
  render-type: INTEGER
  disable-condition: '%world%=disabledworld'
```

### 玩家名称样式
1. 我们可以对TAB上的名称样式进行修改。例如在游戏中输入以下指令：
2. `/tab playeruuid <玩家名称> tabprefix <前缀>`：给玩家设置一个`前缀`。
3. `/tab playeruuid <玩家名称> tabsuffix <后缀>`：给玩家设置一个`后缀`。
4. `/tab playeruuid <玩家名称> customtabname <后缀>`：`自定义玩家名称`。

>playeruuid是识别玩家唯一的ID值。


### 分组
1. TAB默认会给定几个组: `default`，`Owner`，`Admin`，`Mod`，`Helper`...
2. 当然我们也可以在`plugins/TAB/group.yml`中删除和添加组。
3. 我们可以对组进行样式的编辑，例如：可以通过给组绑定前缀（称号）来让所在组的玩家显示组内分配的前缀（称号），举个栗子：“玩家A处在admin组中，而admin组内绑定了管理员称号，那么玩家A的称号就会显示在TAB面板中”。

4. 打开`plugins/TAB/group.yml`文件，在`_DEFAULT_`配置项下方可以新增组或删除组，此外`_DEFAULT_`（默认组）是无法删除的。
5. 没有分配组的玩家会被默认归属到`_DEFAULT_`组内。
6. 被分配组的玩家，其前缀，后缀，自定义名称，和标签都会与组内的进行同步。


```yml
 # default settings for all groups, all groups will take properties from this section unless player's primary group overrides a specific setting
_DEFAULT_:
  tabprefix: "[ &7玩家 &r] &r"
  tagprefix: "%luckperms-prefix%"
  customtabname: "%player%"
  tabsuffix: "%luckperms-suffix%"
  tagsuffix: "%luckperms-suffix%"
  
admin:
  tabprefix: "[ &e管理 &r] &r"
  tagprefix: "%luckperms-prefix%"
  customtabname: "%player%"
  tabsuffix: "%luckperms-suffix%"
  tagsuffix: "%luckperms-suffix%"
  ...... 
```

7. 当然了，组的在TAB排列方式（权重）也是有规则的。
8. 我们可以在`plugins/TAB/config.yml`文件对`primary-group-finding-list`配置项进行修改。
9. 其中组名越是靠前权重就越高，在TAB面板中显示的位置也就越靠前。
```yml
primary-group-finding-list:
  - Owner
  - Admin
  - Mod
  - Helper
  - default
```

### 记分板
1. TAB有一个特别的功能，就是新增了右侧记分板。不过，这个功能我用的不多，通常来讲它需要搭配`PlaceholderAPI`插件来使用才能够显得更强大。这里就不过多叙述。
2. 打开文件`plugins/TAB/config.yml`，根据注释进行修改......
```yml
# https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Scoreboard
scoreboard:
  enabled: false
  toggle-command: /sb
  remember-toggle-choice: false
  hidden-by-default: false
  use-numbers: true
  static-number: 0
  delay-on-join-milliseconds: 0
  scoreboards:
    scoreboard-1.20.3+:
      title: "<#E0B11E>MyServer</#FF0000>"
      display-condition: "%player-version-id%>=765;%bedrock%=false" # Only display it to players using 1.20.3+ AND NOT bedrock edition
      lines:
        - "&7%date%"
        - "%animation:MyAnimation1%"
        - "&6Online:"
        - "* &eOnline&7:||%online%"
        - "* &eCurrent World&7:||%worldonline%"
        - "* &eStaff&7:||%staffonline%"
        - ""
        - "&6Personal Info:"
        - "* &bRank&7:||%group%"
        - "* &bPing&7:||%ping%&8ms"
        - "* &bWorld&7:||%world%"
        - "%animation:MyAnimation1%"
    scoreboard:
      title: "<#E0B11E>MyServer</#FF0000>"
      lines:
        - "&7%date%"
        - "%animation:MyAnimation1%"
        - "&6Online:"
        - "* &eOnline&7: &f%online%"
        - "* &eCurrent World&7: &f%worldonline%"
        - "* &eStaff&7: &f%staffonline%"
        - ""
        - "&6Personal Info:"
        - "* &bRank&7: &f%group%"
        - "* &bPing&7: &f%ping%&8ms"
        - "* &bWorld&7: &f%world%"
        - "%animation:MyAnimation1%"


```
>最后，如果是想对玩家个人进行信息修改可以直接在`plugins/TAB/user.yml`文件中进行具体的修改


## TPA (简易传送插件)

- 兼容版本：`1.21.4` ~ `1.7.10`
- 兼容核心：`Spigot`，`Purpur`，`Paper`，`Folia`，`Bukkit`
- 下载地址：[TPA（Modrinth）](https://modrinth.com/plugin/tpa.66666)
- 使用文档：[TPA（Modrinth教程）](https://modrinth.com/plugin/tpa.66666)

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_plugins_2.png)

1. TPA是一个支持 Folia 的简易传送插件，支持 Bukkit/Spigot/Paper/Folia。
2. 该插件使用起来十分简单，你甚至都不需要打开它的配置文件。
3. 由于十分简单，我甚至可以直接搬运官方教程了...


### 玩家间传送
1. `/tpa <玩家名称>`：向玩家发送传送请求。
2. `/tphere <玩家名称>`：请求玩家传送到你身边。
3. `/tpall [player/warp/spawn]`：强制将所有在线玩家传送到目标位置（如果不加参数，默认传送到使用者身边）。

4. `/tplogout` <玩家名称>：传送到该玩家最后一次下线的位置。
5. `/tpaccept`：接受传送请求（你可以点击聊天框里的 [接受] 来直接接受）。
6. `/tpdeny`：拒绝传送请求（你可以点击聊天框里的 [拒绝] 来直接拒绝，点击聊天框中的 [拒绝并拉黑] 将拒绝请求并且拉黑该玩家）。
7. `/denys [add/remove] [玩家名称]`：列出玩家的黑名单列表。

### 传送点
1. `/warp <坐标>`：传送到传送点。
2. `/setwarp <坐标>`：设置传送点。
3. `/delwarp <坐标>`：删除传送点。

### 家（公开权限）
1. `/home <家名称>`：传送到家。
2. `/homes`：列出你设置的家。
3. `/sethome <家名称>`：设置家。
4. `/setdefaulthome <家名称>`：设置默认的家。
5. `/delhome <家名称>`：删除家。

### 主城
1. `/spawn`：传送到主城。
2. `/setspawn`：设置主城。
3. `/delspawn`：删除主城。

### 其他
1. `/back`：传送到上一次死亡的位置。
2. `/rtp`：随机传送。
3. `/tpa version`：检查插件更新。
4. `/tpa setlang <clear/语言>`：设置客户端显示语言。
5. `/tpa reload`：重新加载配置文件。

### 关闭自动更新与检查
1. 打开配置文件：`plugins/TPA/config.yml`，将`update_check`的值修改为false.
```yml
update_check: false
```

## LuckPerms（权限组插件）


- 兼容版本：`1.21.4` ~ `1.8.9`
- 兼容核心：`Waterfall`，`Velocity`，`Spigot`，`Paper`，`NeoForge`，`Forge`，`Fabric`，`BungeeCord`，`Bukkit`
- 使用文档：[LuckPerms Wiki](https://izzelaliz.gitbooks.io/luckperms-wiki/content/)
- 下载地址1：[LuckPerms（官方）](https://luckperms.net/)
- 下载地址2：[LuckPerms（Modrinth）](https://modrinth.com/plugin/luckperms)

1. LuckPerms是一个用于 Minecraft 服务器的`权限插件/模组`。
2. 它的好用之处在于它可以搭配其他插件，例如：EssentialsX，TAB使得不同组内的权限分配与应用变的更加强大。

### 组
1. `/lp creategroup <组名>`使用该指令来创建一个新的组
2. `/lp deletegroup <组名>`：删除一个组
3. `/lp user <玩家名> parent set <组名>`：将玩家的主要组设置为某组（主要组）
4. `/lp user <玩家名> parent add <组名>`：将玩家添加到组（次要组）
5. `/lp user <玩家名> parent remove <组名>`：将玩家从所在的组移除
6. `/lp user <玩家名> info`：查看玩家的组权信息
![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_plugins_3.jpg)
7. 此外你也可以对组进行编辑，例如我可以给组设置一个前缀，这样组内的玩家就会显示一个固定的前缀。

8. `/lp group admin meta setweight <权重值>`：设置组的权重（数字越大权重越高）
9. `/lp group admin meta addprefix <前缀名>`：给组设置前缀。
10. `/lp group admin meta removeprefix`：移除组的前缀



>关于LuckPerms插件的部分内容就介绍到这里，后续可能会更新...


## LPC（LuckPerms Chat聊天系统）

- 兼容版本：`1.21.4` ~ `1.7.10`
- 兼容核心：`Paper`，`Spigot`，`Sponge`...
- 使用文档：null
- 下载地址：[LPC （Spigot）](https://www.spigotmc.org/resources/lpc-chat-formatter-1-7-10-1-21-4.68965/update?update=336651)

1. LuckPerms Chat一个用于 `LuckPerms` 的聊天格式插件。
2. 这是一个与`LuckPerms`完全兼容和配套的插件。
3. LPC十分的轻便，你只需要对`plugins/LPC/config.yml`进行一个简单的配置就可以使用了，甚至不需要用到任何游戏指令。


### 简单配置
1. config文件中只有两个配置项，分别是`chat-format`和`group-formats`
2. `chat-format`表示的是`普通聊天格式`，当玩家发送消息时，它只会显示一个前缀，名称和聊天信息，偏向简约，我这里是不推荐的开启的。
3. `group-formats`表示的是`组聊天格式`，它会根据不同的组显示不同的聊天格式，例如普通玩家显示默认组内的前缀，管理员则显示Admin组内的前缀。
4. `group-formats`你还可以针对不同的组的信息格式进行自定义修改，比如，给不同组的玩家的聊天信息前缀赋予不一样的颜色。
5. 这里说一下变量，里面的变量都是和`LuckPerms`的数据挂钩的，例如：前缀`prefix`，后缀`suffix`，此外还有默认变量：所处世界`world`，玩家名称`name`，聊天消息`message`等。

6. 最后，如果你不想使用`普通聊天格式`，只需将`配置项注释掉`即可。
```yml
# To reload the configuration, run '/lpc reload' command. Make sure you have the 'lpc.reload' permission assigned.
# More information can be found at https://www.spigotmc.org/resources/68965.
chat-format: "{prefix}{name}&r: {message}"

# Set the format per group.
# Note: Option for more advanced users. Remove comments to run.
group-formats:
  default: "[ &7玩家 &r] [ &2{world} &r] <&b{name}>&r: {message}"
  special: "[ &3{prefix} &r] [ &2{world} &r] <&b{name}>&r: {message}"
  admin: "[ &e{prefix} &r] [ &2{world} &r] < &b{name}>&r: {message}"
```

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/post_plugins_4.png)