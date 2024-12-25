def read_first_n_lines(file_name, n):
    try:
        with open(file_name, 'r') as file:
            for i in range(n):
                line = file.readline()
                if not line:  # Stop if the file has fewer than n lines
                    break
                print(line.strip())
    except FileNotFoundError:
        print(f"The file '{file_name}' does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
file_name = "example.txt"  # Replace with your file name
n = 5  # Replace with the number of lines you want to read
read_first_n_lines(file_name, n)
