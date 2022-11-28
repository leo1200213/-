# 數位音樂藝術與創作 期中報告

這個作品以`interface.pd`作為主要介面，利用mixer上的trigger以及slider，控制不同聲音物件的開關及其他各種可能性，以下介紹各個音樂物件及其他需要用到第三方包裹：

![image](https://i.imgur.com/2kwC9QW.png)

## 音樂物件組成：


 - Bpm : 用來控制節奏樂器的節拍(Drum, Arpeggiator, Hover, Bass)

![](https://i.imgur.com/K4NTobs.png)

 - Drum : 由kick,snare和hi-hat組成的鼓組，能夠介面上調整鼓的reverb，音量和殘響的hi-cut的程度
 
   ![](https://i.imgur.com/m9Ka8q5.png)

   也能控制鼓組的pattern
  
   ![](https://i.imgur.com/GAI8zR1.png)

 - Drone : 做出具有機械音效音效物件
 
   ![](https://i.imgur.com/EbjtBxP.png)
 
 - Arpeggiator :  隨著節拍行進的琶音效果，能透過mixer控制volume, reverb, delay, attack和release等元素 
 
   ![](https://i.imgur.com/UEX7vT2.png)
 
 - Sampler : 能夠播放由自己定義的wav檔(需要和interface.pd同資料夾)
 
![](https://i.imgur.com/ulZpVJ9.png)
                            
   可在`open`這個物件裡修改成自定義的音檔

![](https://i.imgur.com/1Os0N4e.png)

-  Bass : 能夠在固定節奏上彈奏低音，有音量和pattern變化這兩個變數能夠調整

 ![](https://i.imgur.com/Q5Gjigd.png)
 
 -  Stochasitc synth : 提供背景的底噪聲響，可以調控音量,random noise的trigger以及oscillator對頻率的調變

![](https://i.imgur.com/pypqBRK.png)

 -  Hover : 提供銳利帶有glitch感聲響，可以調控音量,照拍子而變化的節奏(4,8,16)，以及提供不同急促程度的4個mode(注意須將`sawfest.cl.pd`一同下載於`interface.pd`的資料夾)

![](https://i.imgur.com/FaYa7Zs.png)



## 使用需要下載的第三方包裹

### Valhalla VintageVerb & Valhalla Super Massive
在該作品裡，有用到第三方提供的reverb和delay plug-ins，可以透過[該教程](https://www.youtube.com/watch?v=Cs0NPime0kU&t=341s&ab_channel=SoundSimulator)將這兩個plug-ins運用在pure data上

([Valhalla Super Massive載點](https://valhalladsp.com/shop/reverb/valhalla-supermassive/)
和
[Valhalla VintageVerb載點（可找一下有沒有免費版的）](https://valhalladsp.com/shop/reverb/valhalla-vintage-verb/))

visual.pd 需先安裝GEM(不支援Mac)

### Live Coding Toolkit for Pure Data
該作品有運用到[Andrew R. Brown](https://www.youtube.com/@QCGInteractiveMusic)所提供的第三方包裹，經由[該連結](https://www.youtube.com/watch?v=070_kvkYp6o&ab_channel=QCGInteractiveMusic)的教學便能
順利使用此作品


    
