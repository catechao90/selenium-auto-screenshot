
from selenium import webdriver

from selenium.webdriver.support.ui import WebDriverWait

import time
import sys 

 
def capture(url, save_fn="./public/IE8.png"):



    browser = webdriver.Ie() 
    browser.set_window_size(1920, 900)
    browser.get(url)
 
    for i in xrange(10):
        if "scroll-done" in browser.title:
            break
        time.sleep(1)
 
    browser.save_screenshot(save_fn)
    browser.close()
 
if __name__ == "__main__":
 
    capture(sys.argv[1])
