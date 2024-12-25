def read_file(filename):
    """Reads the entire content of a text file."""
    try:
        with open(filename, "r") as file:
            content = file.read()
            return content
    except FileNotFoundError:
        return "File not found."

# Get the filename from the user
filename = input("Enter the filename: ")

# Read and print the file content
content = read_file(filename)
print(content)