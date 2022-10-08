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
    # determining size of family(even size remainders will be added after)
    num_ppl = len(NAMES_PPL)
    family_size = num_ppl // 4
    fam = []

    for i in range(family_size):
        member = random.choice(list(NAMES_PPL.keys()))
        fam.append(member)
        NAMES_PPL.pop(member)

    return fam


def displayResults(family):
    clear()
    print(f"{family}: ")
    for i in fam_1:
        print(i)


def calculate_results():
    global fam_1, fam_2, fam_3, fam_4

    # creating the families
    family_1 = assign_family()
    family_2 = assign_family()
    family_3 = assign_family()
    family_4 = assign_family()

    while len(NAMES_PPL) != 0:
        placed = random.randint(0, len(FAMILIES))
        member = random.choice(list(NAMES_PPL.keys()))

        if placed == 0:
            family_1.append(member)
        elif placed == 1:
            family_2.append(member)
        elif placed == 2:
            family_3.append(member)
        else:
            family_4.append(member)

        NAMES_PPL.pop(member)
    
    fam_1 = family_1
    fam_2 = family_2
    fam_3 = family_3
    fam_4 = family_4


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


client()
