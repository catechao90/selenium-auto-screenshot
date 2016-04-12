from selenium import webdriver
import sys 

 
def capture(url, save_fn="./public/IE8.png"):
    browser = webdriver.Ie()
    browser.get(url)
 
    browser.save_screenshot(save_fn)
    browser.close()
 
if __name__ == "__main__":
 
    capture(sys.argv[1])
