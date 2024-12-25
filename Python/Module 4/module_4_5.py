def find_longest_words(file_name):
    try:
        with open(file_name, 'r') as file:
            words = file.read().split()  # Split the file content into words
            max_length = len(max(words, key=len))  # Find the length of the longest word
            longest_words = [word for word in words if len(word) == max_length]  # Get all longest words
        return longest_words
    except FileNotFoundError:
        print(f"The file '{file_name}' does not exist.")
        return []
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

# Example usage
file_name = "example.txt"  # Replace with your file name
longest_words = find_longest_words(file_name)

if longest_words:
    print("Longest word(s):", longest_words)
else:
    print("No words found or file does not exist.")
