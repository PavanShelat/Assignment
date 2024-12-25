class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def compute_area(self):
        return self.length * self.width

# Example usage
rect = Rectangle(5, 10)  # Create a Rectangle object with length 5 and width 10
print(f"The area of the rectangle is: {rect.compute_area()}")
