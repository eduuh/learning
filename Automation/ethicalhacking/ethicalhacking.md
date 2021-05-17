introduction
effective notekeeping
networing refresher

### Effective notekeeping

Taking notes for the assessements.

## INtroduction

#### Ip addresses. Layer 3

128 64 32 16 8 4 2 1
0 0 0 0 0 0 0 0 = 255

The number of ip address available are 2^32
The ip address are all gone. We run out of ip address space.

IPV6: The ip address are 2^128.
But here is a catch. We are not using IPV6 yet we are still using ipv4 addresses.

We are using something called **NAT**. Anything that start with 192. or 10. this are
private ip address.

There are **a class of private ip addresses**. Class A and Class B Class C and the Loopback.
All the devices in the network uses one Ip address to communicate with online world.
Ip address are layer three protocals.

### Mac addresses. Layer 2

A way we communcate when using switches. Everying that utilizes a network interface have mac addresses.

Mac address have identifiers. Layer two related to switching.

### TCP, UDP, and the three way handshake. Layer 4

TCP. Trasmission control protocal.
UDP. User datagram protocal.

Tcp is connection oriented.
examples ssh.
TCp works on a three way handshake
SYN > SYN ACK > ACK
SYN > I want to connect to you.

UDP does not rely on connection less.
example streaming service.

#### Common ports and protocals

TCP

1. FTP(21)
2. SSH(22)
3. Telnet(23)
4. SMTP (25)
5. DNS (53)
6. HTTP(80) / HTTPS(443)
7. POP3(110)
8. SMB(139 + 445)
9. IMAP(143)

UDP

1. DNS (53)
2. DHCP (67,68)
3. TFTP (69)
4. SNMP (161)

#### The Osi model

The osi model. Please do not throw sausage pizza away.

1. Physical = data cables , cat 6
2. Data = Switching, Mac Address
3. Network = Ip address , routing
4. Transport = TCP/udp
5. Session = Session management
6. Presentation = WMV, Jpeg mov
7. Application = http, smtp

#### Subnetting

#### Ping sweep

We want to sweep out some information from a network.
some command to use **ping**, **grep** , **cut**

```bash
#!/bin/bash
if [ "$1" == "" ]
then
echo "You forgot an IP address"
echo "syntax: ./ipsweep.sh 192.168.5"
else
for ip in `seq 1 254` ; do
ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
done
fi
#tr > translate
```

The command ping together with the grep command gives the output.

64 bytes from 192.168.8.100: icmp_seq=1 ttl=64 time=0.077 ms

Cut command is used to select the 4 word that comes after the spaces. In order to select the ip
addresses we could use cut command, the four signifies the word after the fourth space

```bash
ping -c 1 $1.$ip | grep "64 bytes" | cut -d " " -f 4 | tr -d ":" &
```

#### Python

1. Strings
2. Math
3. Variables and methods
4. Functions
5. Boolean Expression
6. Relational operators
7. Conditional statements
8. Lists
9. Tuples
10. Looping
11. Importing Modules
12. Advanced strings
13. Dictionaries
14. Sockets
15. Tool building.

#### strings

## Note

Please only use the information learned in this course for ethical purpose

The Five stages of hacking

1. Reconnissance - Active - Passive
2. Scanning and Enumeration. => Nmap , Nessus, Nikto
3. Gaining Access (Exploitation)
4. Maintaining Access 5. Covering Tracks
5. Covering tracks.

### Reconnissance

1. Locatioon Information

   Satellite images
   Drone recon
   Building layout (badge reader, break areas, security fencing)

2. Job Information

   Employees (name, job title, phonenumber manager)
   Picture(badge photo, desk photos, computer photos, etc.)

This information is either **physical/social**

#### Web / Host

1. Target Validation. WHOIS, nslookup, dnsrecon
2. Finding Subdomains. Google Fu, dig, Nmap, Sublistgr, Bluto, crt.sh, etc
3. FingerPrinting. Nmap, Wapalyzer, whatWeb , BuiltWith, Netcat
4. DataBreatch. HavelBeenPwned, BreachParser, WeLeakInfo

#### Email finder with Hunter.io
