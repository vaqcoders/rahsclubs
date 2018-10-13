# RAHS Clubs
An informational guide to the amazing clubs at Rancho Alamitos High School.

### links:
* [Live Website](https://vaqcoders.github.io/rahsclubs/)
* [Coding Train Video on Local Host](https://www.youtube.com/watch?v=UCHzlUiDD10)
* [FullCalendar API](https://fullcalendar.io/)
* [FullCalendar JSON Format](https://fullcalendar.io/docs/event-object)

### How To Add More Clubs
1. Goto the clubs folder and create a new json file with the title of the club you are proposing.
2. Copy/paste a preexisting json file into your new one and replace the data with the correct info for that club.
3. When you think you have finished making your json file, compare with a preexisting one to make sure that you did not forget anything.
4. Now, make sure that your syntax is correct by pasting your entire json file into [JSON Formatter](https://jsonformatter.curiousconcept.com/) and they will tell you if your json is valid and where your mistakes are if you have any.
5. You may have noticed a place in the json file called "imgsrc"; this stands for *image source*, which should link to a media file located in the "cgi-bin" folder. So, what you need to do in order to add a picture for the club is to upload a file to "cgi-bin" and link and use its file name in the "imgsrc" field in the json file.
6. When you have completed adding your image and your json file, goto clubs/clubs.json and you will find an array of the names of the json files in the clubs folder. This is because we need a list of what json files to include when the webpage is loaded. So all you need to do here is add the name of your club to the bottom of the array. The text that you use should exactly match your json file.
7. That should be it, but if you want to go above and beyond using GitHub Desktop and Node.js, check out the following steps.
  1. If you would like to be able to view your edited version of the website before you commit it, you would need to fork and download a version of the project on GitHub Desktop. More info on how to get GitHub Desktop is on the [website README file](https://github.com/vaqcoders/website/blob/master/README.md).
  2. Next, if you do not have Node.js installed, install it. Use this [video](https://www.youtube.com/watch?v=RF5_MPSNAtU) by NYU Professor Daniel Shiffman to help you out (I love him).
  3. Now, as you edit the project as a whole, you can have a server running by using the command "http-server" in your command terminal. You can view it in a "port" on your browser by going to one of the links shown in the command terminal. [This guy](https://www.youtube.com/watch?v=vnPemSnnJYY) does a great job in explaining it.
  4. Once you are all ready to commit your changes, continue on by following the directions in the [website README file](https://github.com/vaqcoders/website/blob/master/README.md).
