import bs4 as bs
import urllib.request
import sys
import xlwt


wb = xlwt.Workbook()
ws = wb.add_sheet('A Test Sheet')

sauce= urllib.request.urlopen('http://www.medicinenet.com/symptoms_and_signs/alpha_a.htm').read()
soup=bs.BeautifulSoup(sauce,'lxml')

j=0
i=0
k=0

for div in soup.findAll('div',attrs={'class':'AZ_results'}):
    for l in div.findAll('li'):
        print (l.find('a').text)
        ws.write(i,0, l.find('a').text)
        i=i+2
    attrib_value = []
    attrib_value += [a['href'] for a in div.findAll('a',{'href':True})]
    for x in attrib_value[1:]:
        link='http://www.medicinenet.com'+x
        print (link)
        sauce1= urllib.request.urlopen(link).read()
        soup1=bs.BeautifulSoup(sauce1,'lxml')
        for div1 in soup1.findAll('div',attrs={'id':'ForumCenter_fmt'}):
            for linebreak in div1.find_all('br'):
                linebreak.extract()
            a= []
            a += [p.text for p in div1.findAll('p')[2:4]]
            for y in a:
                print(y)
                ws.write(k, 1,y)
                k=k+1


wb.save('e21.xls')


#for p in div1.findAll('p')[2:4]:
                #print(p.text,end='')
