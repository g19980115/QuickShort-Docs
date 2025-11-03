# 概览

## 添加活动
活动即Activity，是应用的界面，在添加活动界面(首页点击编辑-自定义-添加活动)，点击“**包名**”输入框**右侧加号**可以打开应用列表进行选取。
::: tip
**包名**是应用的ID，比如QQ的包名是com.tencent.mobileqq

**类名**是应用界面的路径，比如QQ首页是com.tencent.mobileqq.activity.SplashActivity

[点此添加一个示例](quickshort://share?n=jaaXTL7kADtJZQEMOYKIZkeZiv2gCd6Q2DykGkb5jFZqZPEEUUih0xrphRungNDtQHhH/z6OXuP0fDlLrJTn1VgpuGp5RQHMv4gN6ilVotrPLMcGnXZ+DTsDmyZghCk27M4vw+oQbOPmoMyxq8xhkxXqzwEqBPypgAZQqrdVNB7urD4570gQngmWXj/iCZpz08qIMejlOGaa10GbwDL/KKsF2EzvXUMX3EXqffzVGX0+ZGhGwleLYuWzxnPkjV7hoIyhyO48tsF8pZyyN90wEg)
:::
::: tip
可以使用“**自定义-获取前台活动**”功能获取包名和类名，需要悬浮窗和无障碍权限，悬浮窗启动后手动打开要抓取的应用界面即可

**注意：并非所有活动都可以启动，可能需要Root权限或者需要跳转参数**
:::

## 添加链接
链接支持URL SCHEME [示例](quickshort://share?n=+bbrXOJZB8n5yfzZml0jXVIOJlVn3qOPFpHz9qHaVzZd8m19wuQ32eTy/mmdEmhGgpSjHBTTm98J+D/VqDOZwrf7LwGm4KGOn3EBUUrUqTXyHfNcFsHX+t31EKizZ2NeJ4LOJrlVajT/PtAKn8K8uTFRgD4HKtA8S17fiVpqIUeRHqHmiyzbRmr1rzKdzP1PyjSNssOxsi0RigudMZku3uq1wmiBLMWuNPG5qFjnlGo2UzuqxH+JamMZ+hl0Q71jZBbiu1yP2G5WloZAfpdYDepsp8xYIvncu8K/5gwitY0byUpq7KEmQKhKzrKUyxh0)、Intent链接 [示例](quickshort://share?n=PRPHz197+3bXV/3KNCgiViUN0DtJ5TI4cDFjWjyZy1JV/aBLOi1F2nqni13Dau/fw3BQczsW4sB0/I22VoTZCwSc4e3ZILowpgsWwwnpbyYLnjOurtmipEbKxk9orlw+mlKWlfn06zX+VaIgWF+Ci43aBuqcLFzaOhfhj9KhJqlxc1tR8MAoKHiK9x0xEu+n4ONVmK1qlwoGPugMUtcN64DQVUzr3mK5KTRVDb34tr34esXNvHtnbTBunxxsx1arTVMK/RlPOjsQuym98IEftsPHBa1AubX+UuBeWqPOTsao5wVay3LsoHDqxBkktp53/lW66G02ViEUI1Uotd7HikPba1E3Yk47DKjIB1cNO04+wRQEM8hCQTjqlFfpA1Ym)、android-app链接

::: tip
以下是一种抓取链接的教程<br>
如果网页支持跳转到App，那么此时可以将网址输入到“[添加链接](quickshort://share?n=b68oIiwREJH1JaG/l62y1rLWwNLAQICisu25/0ENY6hCFFrHXd6FRSedhCkZJ8RB3sLG3CsUY909rxunDX3uG6vLMLlVyLHDoHYS8p22CoxWBmBHv1LezAVWLOlMJYfwgUb/KvMO1SNGDLv6ESZPXQ)”中，包名选择快捷方式的“打开网页”，点击测试后，在网页中跳转到app，会弹窗提示url scheme跳转链接

[点此添加一个示例](quickshort://share?n=b68oIiwREJH1JaG/l62y1j9jnLuQDP4y53+5cQRAOiLo4WjbbbwOqtqKCt7nQrzrejP+JJwzCt4/Xhd5hVE3bRN6DMJzlE6TKrYayE1QZlQfEE85IhRp8K7sruZIz65Krh7JZrVNeT0Jl7Zb3C/r15v08mPju6j081phW7Rok29fZDOh2dbWDN8PgtNPFrD9Hg+XoelDbkJQZ6W1CTLaP1rd/+guCY9UBMYWoREUTmk)
:::

## 添加小程序
小程序原始id是gh_开头的id，在此处可以找到：小程序右上角菜单-点击小程序名称-点击小程序描述-更多资料-账号原始id<br>
[点此添加一个示例](quickshort://share?n=/oRtskWOopXRZXmB2Y+zv7BTEyRH4GIgQ3juxt2+oS2u8cQWAGc9ttOH4RSbSiuLYCS0dV2XyzGqx/6354FvBcPg8HFM/dAKjwLkKHEPHP71M9H/yzkDxex5paMHy8+lupWCaTjpqlX6iCMlK5KjS8Q/YlbWux8Li0uW7udsi9FMqw8CUxi6Av+7K7YvXl4kfGUvn3klN7dWKpLoOFtsgPd9gmzrSPMydXJt7pIwG05VK3SWKB7H8v5IfcEzdKtJrlAh/iMWb8bSIjDh9X2bDLL7ajCs7tGmhZ6SR1a68mQ)

::: details 查看步骤图片
![图片](/xcx_help.jpg)
:::

## 无法启动？
如果在应用内点测试可以启动，而在桌面快捷方式/磁贴无法启动时，需要设置[后台白名单](battery)