import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def compute_area(self):
        """Method to compute the area of the circle."""
        return math.pi * (self.radius ** 2)

    def compute_perimeter(self):
        """Method to compute the perimeter (circumference) of the circle."""
        return 2 * math.pi * self.radius

# Example usage
circle = Circle(5)  # Create a Circle object with radius 5
print(f"The area of the circle is: {circle.compute_area():.2f}")
print(f"The perimeter of the circle is: {circle.compute_perimeter():.2f}")
