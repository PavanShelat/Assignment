import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def compute_area(self):
        return math.pi * self.radius ** 2

    def compute_perimeter(self):
        return 2 * math.pi * self.radius

# Example usage
circle = Circle(7)  # Create a Circle object with radius 7
print(f"The area of the circle is: {circle.compute_area():.2f}")
print(f"The perimeter of the circle is: {circle.compute_perimeter():.2f}")
