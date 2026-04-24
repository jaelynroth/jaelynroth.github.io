# Slideshow Implementation Guide

## Overview
The slideshow component provides automatic and manual image navigation with captions. It works on any page and requires minimal setup.

## Files Created
- `assets/js/slideshow.js` - Slideshow functionality
- `assets/css/slideshow.css` - Slideshow styling

## How to Use

### Step 1: Include the files in your HTML
Add these lines to the `<head>` of your page (after the main.css link):

```html
<link rel="stylesheet" href="assets/css/slideshow.css" />
```

And add this before the closing `</body>` tag (after main.js):

```html
<script src="assets/js/slideshow.js"></script>
```

### Step 2: Create the slideshow HTML structure

```html
<div class="slideshow" id="mySlideshow">
    <div class="slideshow-container">
        <!-- Each slide is a div with class "slide" -->
        <!-- The data-caption attribute is optional and shown below the image -->
        
        <div class="slide" data-caption="Photo 1: Description here">
            <img src="images/photo1.jpg" alt="Photo 1">
        </div>
        
        <div class="slide" data-caption="Photo 2: Another description">
            <img src="images/photo2.jpg" alt="Photo 2">
        </div>
        
        <div class="slide" data-caption="Photo 3: More details">
            <img src="images/photo3.jpg" alt="Photo 3">
        </div>
    </div>
    
    <!-- Caption display -->
    <div class="slideshow-caption"></div>
    
    <!-- Navigation buttons -->
    <div class="slideshow-controls">
        <button class="slideshow-prev">← Prev</button>
        <button class="slideshow-next">Next →</button>
    </div>
</div>
```

### Step 3: Initialize the slideshow with JavaScript

Add this JavaScript code after you've included the slideshow.js file:

```html
<script>
    $(document).ready(function() {
        $('#mySlideshow').slideshow({
            autoplay: true,      // Enable automatic sliding (true/false)
            interval: 5000,      // Milliseconds between auto-slides (default: 5000)
            speed: 500           // Animation speed in milliseconds (default: 500)
        });
    });
</script>
```

## Configuration Options

- **autoplay** (boolean, default: true) - Enable automatic sliding
- **interval** (number, default: 5000) - Time in milliseconds between slides
- **speed** (number, default: 500) - Fade animation speed in milliseconds

## Features

✓ Automatic slideshow with configurable timing
✓ Click through with Previous/Next buttons
✓ Captions for each photo (optional via data-caption)
✓ Auto-pause on hover, resume on mouse leave
✓ Smooth fade transitions
✓ Responsive design
✓ Works with multiple slideshows on one page

## Example: Multiple Slideshows

```html
<!-- Slideshow 1 -->
<div class="slideshow" id="slideshow1">
    <!-- slides and controls -->
</div>

<!-- Slideshow 2 -->
<div class="slideshow" id="slideshow2">
    <!-- slides and controls -->
</div>

<script>
    $(document).ready(function() {
        $('#slideshow1').slideshow({ autoplay: true, interval: 4000 });
        $('#slideshow2').slideshow({ autoplay: true, interval: 6000 });
    });
</script>
```

## Notes

- If `data-caption` is omitted, the caption area will be empty
- Images will be contained within their container while maintaining aspect ratio
- The slideshow automatically wraps around (last → first, first → previous)
- Captions can contain plain text (HTML should be escaped if you want to display it literally)
