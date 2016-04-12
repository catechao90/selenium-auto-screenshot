 
from selenium import webdriver
import sys 
 
def capture(url, save_fn="./public/ff.png"):
    browser = webdriver.Firefox() 
    browser.get(url)
    browser.save_screenshot(save_fn)
    browser.close()
 
if __name__ == "__main__":
 
    capture(sys.argv[1])
