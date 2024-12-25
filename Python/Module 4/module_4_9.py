def copy_file_contents(source_file, destination_file):
    try:
        with open(source_file, 'r') as src:
            content = src.read()  # Read the contents of the source file
        with open(destination_file, 'w') as dest:
            dest.write(content)  # Write the contents to the destination file
        print(f"Contents copied from '{source_file}' to '{destination_file}' successfully.")
    except FileNotFoundError:
        print(f"The file '{source_file}' does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
source_file = "source.txt"  # Replace with the name of the source file
destination_file = "destination.txt"  # Replace with the name of the destination file
copy_file_contents(source_file, destination_file)
