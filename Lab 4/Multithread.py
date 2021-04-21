'''
Pid manager assignment. 
'''
#  lets us use a random numnber
import random
#  built in threading library for python
import threading
#  lets us use the sleep function
import time



MIN_PID = 300
MAX_PID = 5000

#creates an array of size 5001 (0-5000)
pid_map = [None] * (MAX_PID + 1)
mutex=threading.Lock()


def main():
    #  allocates the map and prepares it assign PID's tp threads
    allocate_Map()

    # for loop creaates 100 threads
    for newThreads in range (0,100):
        #  thread is instatiated and assigned a function to call when started
        newThreads = threading.Thread(target=multithread)
        #  thread is started 
        newThreads.start()


# ---------------------------------------------------------------------------------------------------------------------------------#
# -----------------------------------------------FUNCTIONS/METHODS-----------------------------------------------------------------#
# ---------------------------------------------------------------------------------------------------------------------------------#
# function that is called when starting a thread
def multithread():

    global mutex
    
    #added delay to simulate processes randomly opening
    time.sleep(random.randint(1,5))
    #  when the process opens it allocates a pid for that thread
    
    mutex.acquire()
    pid = allocate_pid()
    
    #  print statement to show the thread is sleeping 
    print(str(pid) + " sleeping")
    mutex.release()

    #delay to simulate process running for random time
    time.sleep(random.randint(1,10))
    # once time runs out the pid is released
    mutex.acquire()
    release_pid(pid)
    mutex.release()





#Creates and initializes a data structure represeting pids
# Takes no inputs
#returns - 1 if unsuccessful and 1 if successful
def allocate_Map():
    
    for pid in range(300, (MAX_PID + 1)):
        if(pid_map[pid]==None):
            pid_map[pid] = 0
        else:
            return -1

    return 1

#Allocates and returns a pid;
# Takes no inputs
# Returns pid if successful
#returns - 1 if unable to allocate pid(if all possible PID's are in use)
def allocate_pid():
    for pid in range(300, (MAX_PID + 1)):
        if pid_map[pid] == 0:
            pid_map[pid] = 1
            return pid
    return -1

def allocate_all():
    for pid in range(300, (MAX_PID + 1)):
        if pid_map[pid] == 0:
            pid_map[pid] = 1


#Releases PID
# Takes 1 input value of PID you want to release
# void return
# if pid is active deactivate it and vice versa
def release_pid(pid):
    if (pid_map[pid] == 0):
        print("PID#: " + str(pid) + " is not currently active")
    else:
        print("PID#: "+ str(pid) +" has been released")
        pid_map[pid] = 0

    

if __name__ == "__main__":
    main()
