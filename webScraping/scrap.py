import requests
from bs4 import BeautifulSoup
import csv 

page = requests.get("https://www.voscours.fr/annonces/profs-particuliers")
 
def main (page):
    src = page.content
    soup = BeautifulSoup(src, "lxml")
    announcements_details = []
    premuim_announcements_details = []
    
    all_announcements = soup.find_all("div", {'class' : 'itemv3'})
    premuim_announcements = soup.find_all("div", {'class' : 'itemv3 highlight'})
    announcements = list(set(all_announcements) - set(premuim_announcements))  # normal announcements 
    
    # get normal announcements
    def get_announcements_info(announcements):
            # number of announcements
        number_announcements = len(announcements)
        # print(number_announcements)
        
        for i in range(number_announcements):
                # get announcer name 
            announcer_name = announcements[i].contents[0].find("div",{'class': 'username'}).text.strip()
            # print(announcer_name)   
            
                #  get localisation 
            announcer_local = announcements[i].contents[0].find("div",{'class': 'place'}).contents[1].text.strip()
            # print(announcer_local)
            
                # get subject
            announcements_subject = announcements[i].contents[0].find("div",{'class': 'subject'}).contents[1].text.strip()
            # print(announcements_subject)
            
                # get title 
            announcements_title = announcements[i].contents[0].find("a",{'class': 'title'}).text.strip()
            # print(announcements_title)
            
                # get description
            announcements_Description = announcements[i].contents[0].find("div",{'class': 'description'}).text.strip()
            # print(announcements_Description)
            
                # get price
            price = announcements[i].contents[0].find("b").text.strip()
            announcements_price = f"{price}\u20AC/h"
            # print(announcements_price)
            
                # add to announcements_details list
            announcements_details.append({"announcer name":announcer_name,
                                          "localisation":announcer_local,
                                          "subject":announcements_subject,
                                          "announcement title":announcements_title,
                                          "announcement description":announcements_Description,
                                          "announcement price":announcements_price })
            
            # print(announcements_details[i])
            
        
            
    get_announcements_info(announcements)
    
        # the headers of the file 
    keys = announcements_details[0].keys()
    
        # creat the csv file
    with open("./Announcements/Announcements.csv", "w") as f :
       dict_Writer = csv.DictWriter(f,keys)
       dict_Writer.writeheader()
       dict_Writer.writerows(announcements_details)
       print('Announcements.csv file created')
   
   
   
    # get premuim announcements 
    def get_permuim_announcements_info(premuim_announcements):
        number_announcements = len(premuim_announcements)
        # print(number_announcements)
        
        for i in range(number_announcements):
            
            announcer_name = premuim_announcements[i].contents[1].find("div",{'class': 'username'}).text.strip()
            # print(annoucer_name)
        
                        #  get localisation 
            announcer_local = premuim_announcements[i].contents[1].find("div",{'class': 'place'}).contents[1].text.strip()
            # print(announcer_local)
            
                # get subject
            announcements_subject = premuim_announcements[i].contents[1].find("div",{'class': 'subject'}).contents[1].text.strip()
            # print(announcements_subject)
            
                # get title 
            announcements_title = premuim_announcements[i].contents[1].find("a",{'class': 'title'}).text.strip()
            # print(announcements_title)
            
                # get description
            announcements_Description = premuim_announcements[i].contents[1].find("div",{'class': 'description'}).text.strip()
            # print(announcements_Description)
            
                # get price
            price = premuim_announcements[i].contents[1].find("b").text.strip()
            announcements_price = f"{price}\u20AC/h"
            # print(announcements_price)
            
                        # add to announcements_details list
            premuim_announcements_details.append({"announcer name":announcer_name,
                                          "localisation":announcer_local,
                                          "subject":announcements_subject,
                                          "announcement title":announcements_title,
                                          "announcement description":announcements_Description,
                                          "announcement price":announcements_price })
        
            # print(premuim_announcements_details[i])
        
    get_permuim_announcements_info(premuim_announcements)
    
        # the headers of the file 
    keys2 = premuim_announcements_details[0].keys()
    
        # creat the csv file
    with open("./Announcements/Premuim_Announcements.csv", "w") as f2 :
       dict_Writer = csv.DictWriter(f2,keys2)
       dict_Writer.writeheader()
       dict_Writer.writerows(premuim_announcements_details)
       print('Premuim_Announcements.csv file created')

   
main(page)
