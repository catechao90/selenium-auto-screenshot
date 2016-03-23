# -*- coding: utf-8 -*-
#
# author: oldj <oldj.wu@gmail.com>
# blog: http://oldj.net
#
 
from selenium import webdriver

from pyvirtualdisplay import Display

import time
import sys 

 
def capture(url, save_fn="chorme.png"):



    browser = webdriver.Chrome('/root/chromedriver') # Get local session of firefox
    browser.set_window_size(1920, 900)
    browser.get(url) # Load page
    browser.execute_script("""
        (function () {
            var y = 0;
            var step = 100;
            window.scroll(0, 0);
 
            function f() {
                if (y < document.body.scrollHeight) {
                    y += step;
                    window.scroll(0, y);
                    setTimeout(f, 50);
                } else {
                    window.scroll(0, 0);
                    document.title += "scroll-done";
                }
            }
 
            setTimeout(f, 1000);
        })();
    """)
 
    for i in xrange(30):
        if "scroll-done" in browser.title:
            break
        time.sleep(1)
 
    browser.save_screenshot(save_fn)
    browser.close()
 
if __name__ == "__main__":
 
    capture(sys.argv[1])
