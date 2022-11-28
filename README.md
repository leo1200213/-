# 數位音樂藝術與創作 期中報告

這個作品以`interface.pd`作為主要介面，利用mixer上的trigger以及slider，控制不同聲音物件的開關及其他各種可能性，以下介紹各個音樂物件及其他需要用到地方元件：
![](https://i.imgur.com/2kwC9QW.png =800x350)
這些物件由幾個元素所組成：
 - Bpm : 用來控制節奏樂器的節拍(Drum, Arpeggiator, Hover, Bass)

![](https://i.imgur.com/K4NTobs.png =180x180)

 - Drum : 由kick,snare和hi-hat組成的鼓組，能夠介面上調整鼓的reverb，音量和殘響的hi-cut的程度
 
   ![](https://i.imgur.com/m9Ka8q5.png =200x150)

   也能控制鼓組的pattern
  
   ![](https://i.imgur.com/GAI8zR1.png =180x140)

 - Drone : 做出具有機械音效音效物件
 
   ![](https://i.imgur.com/EbjtBxP.png =150x180)
 
 - Arpeggiator :  隨著節拍行進的琶音效果，能透過mixer控制volume, reverb, delay, attack和release等元素 
 
   ![](https://i.imgur.com/UEX7vT2.png =250x180)
 
 - Sampler : 能夠播放由自己定義的wav檔(需要和interface.pd同資料夾)
![](https://i.imgur.com/ulZpVJ9.png =200x100)
                            
   可在`open`這個物件裡修改成自定義的音檔

![](https://i.imgur.com/1Os0N4e.png =280x200)

-  Bass : 能夠在固定節奏上彈奏低音，有音量和pattern變化這兩個變數能夠調整

 ![](https://i.imgur.com/Q5Gjigd.png)
 
 -  Stochasitc synth : 提供背景的底噪聲響，可以調控音量,random noise的trigger以及oscillator對頻率的調變

![](https://i.imgur.com/pypqBRK.png =250x180)

 -  Hover : 提供銳利帶有glitch感聲響，可以調控音量,照拍子而變化的節奏(4,8,16)，以及提供不同急促程度的4個mode

![](https://i.imgur.com/FaYa7Zs.png =250x180)




    
