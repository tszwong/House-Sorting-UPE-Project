# houseSort.py
# program for sorting new UPE members into the four houses

from os import system, name
import random
import sys

# houses
NAMES_PPL = {}
FAMILIES = ["fam_1", "fam_2", "fam_3", "fam_4"]
fam_1 = []
fam_2 = []
fam_3 = []
fam_4 = []


def clear():
    """
    clears the terminal
    """
    if name == "nt":
        _ = system("cls")
    else:
        _ = system("clear")


def options_menu():
    print("Options: \n(1) Remove Name  \n(2) Get Results")


def get_input():
    current_input = str(input('Enter your name or other options: '))
    return current_input


def assign_family():
    num_ppl = len(NAMES_PPL)
    family_size = num_ppl // 4

    for i in range(family_size):
        member = random.choice(list(NAMES_PPL.keys()))
        fam_1.append(member)
        NAMES_PPL.pop(member)

    for i in range(family_size):
        member = random.choice(list(NAMES_PPL.keys()))
        fam_2.append(member)
        NAMES_PPL.pop(member)

    for i in range(family_size):
        member = random.choice(list(NAMES_PPL.keys()))
        fam_3.append(member)
        NAMES_PPL.pop(member)

    for i in range(family_size):
        member = random.choice(list(NAMES_PPL.keys()))
        fam_4.append(member)
        NAMES_PPL.pop(member)


def calculate_results():
    num_ppl = len(NAMES_PPL)
    assign_family()

    while len(NAMES_PPL) != 0:
        placed = random.randint(0, len(FAMILIES))
        if placed == 0:
            member = random.choice(list(NAMES_PPL.keys()))
            fam_1.append(member)
            NAMES_PPL.pop(member)
        elif placed == 1:
            member = random.choice(list(NAMES_PPL.keys()))
            fam_2.append(member)
            NAMES_PPL.pop(member)
        elif placed == 2:
            member = random.choice(list(NAMES_PPL.keys()))
            fam_3.append(member)
            NAMES_PPL.pop(member)
        else:
            member = random.choice(list(NAMES_PPL.keys()))
            fam_4.append(member)
            NAMES_PPL.pop(member)

def displayResults():
    clear()
    print(f"{FAMILIES[0]}: ")
    for i in fam_1:
        print(i)

    print(f"\n{FAMILIES[1]}: ")
    for i in fam_2:
        print(i)

    print(f"\n{FAMILIES[2]}: ")
    for i in fam_3:
        print(i)

    print(f"\n{FAMILIES[3]}: ")
    for i in fam_4:
        print(i)



def client():
    print("Welcome, you all will now be sorted into the families...\n")

    while True:
        options_menu()
        curr_input = get_input()

        clear()
        if curr_input == "2":
            break
        elif curr_input == "1":
            remove_name = str(input("Enter name for removal: "))
            NAMES_PPL.pop(remove_name)
        else:
            NAMES_PPL[curr_input] = None

        # print(NAMES_PPL)

    calculate_results()
    displayResults()


client()
