def get_odd_number():
    try:
        number = int(input("Enter an odd number: "))
        if number % 2 == 0:
            raise ValueError("You entered an even number! Only odd numbers are allowed.")
        print(f"Thank you for entering the odd number: {number}")
    except ValueError as e:
        print(e)

# Example usage
get_odd_number()
