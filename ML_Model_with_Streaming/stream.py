import socket,time
from time import sleep
import csv
host = 'localhost'
port = 8990



s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((host, port))
s.listen(1)

while True:
    print('\nListening for a client at',host , port)
    conn, addr = s.accept()
    print('\nConnected by', addr)
    try:
        print('\nReading file...\n')
        with open('flights.csv') as f:
            i=0
            for line in f:
                if i==0:
                    i=1
                    continue
                out = line.encode('utf-8')
                print('Sending line',line)
                conn.send(out)
                sleep(5)
            print('End Of Stream.')
    except socket.error:
        print ('Error Occured.\n\nClient disconnected.\n')
conn.close()