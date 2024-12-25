from collections import Counter

def count_word_frequency(file_name):
    try:
        with open(file_name, 'r') as file:
            words = file.read().lower().split()  # Convert to lowercase and split into words
            word_counts = Counter(words)  # Count the frequency of each word
        return word_counts
    except FileNotFoundError:
        print(f"The file '{file_name}' does not exist.")
        return {}
    except Exception as e:
        print(f"An error occurred: {e}")
        return {}

# Example usage
file_name = "example.txt"  # Replace with your file name
word_counts = count_word_frequency(file_name)

if word_counts:
    print("Word frequencies:")
    for word, count in word_counts.items():
        print(f"{word}: {count}")
else:
    print("No words found or file does not exist.")
