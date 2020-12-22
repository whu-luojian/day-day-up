/**
 * 1像素问题原理
 */

/**
 * 物理像素（DP）
 * 物理像素又称设备像素，是组成显示屏的基本单位，每一台设备的物理像素在出厂的时候就固定好了，不会改变，屏幕分辨率指的就是物理像素。
 * 设计师一般要求的像素就是物理像素。
 * 
 * 
 * 逻辑像素（DIP）
 * 逻辑像素又称为设备独立像素或CSS像素，是组成图像的基本单位，我们可以笼统的认为屏幕可视区域的宽度就是逻辑像素的大小。
 * 它是相对单位，在1倍屏下，1逻辑像素=1物理像素；2倍屏下，1逻辑像素=2物理像素。
 * 逻辑像素是可变的，例如我们放大页面的尺寸比例时，逻辑像素也就随之扩大。
 * 前端开发者在CSS中设置的像素就是逻辑像素。
 * 
 * 
 * 设备像素比（DPR）
 * 设备像素比 = 物理像素（设备像素） / 逻辑像素
 * 
 * 
 * 总结
 * 1. width = device-width时，dpr为1和dpr为2的设备中 1px 占用的物理像素不一样，但理论上视觉宽度一样（实际上高分屏1逻辑像素看上去会更粗）
 * 2. px是相对单位，我们常说的移动端实现 1px 边框实际指的是实现 1 物理像素边框。
 */