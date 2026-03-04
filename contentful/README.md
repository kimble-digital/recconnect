# Contentful Setup for RecConnect

This folder contains the content model definitions for RecConnect.

## Content Models Overview

| Content Type | Description | Who Creates |
|-------------|-------------|-------------|
| `supplier` | Supplier directory listings | Simon |
| `category` | Supplier categories | You (setup) |
| `event` | Workshop/event pages | Simon |
| `speaker` | Event speakers | Simon |
| `article` | Blog posts (Salt Report / Rec Matters) | Simon |
| `author` | Article authors | Simon |
| `membershipTier` | Membership pricing tiers | You (setup) |
| `siteSettings` | Global site configuration | You |

## Setting Up Content Models

You have two options:

### Option 1: Manual Setup (Recommended for Learning)

Create each content type in Contentful manually. This helps you understand the structure.

#### Category
- **name** (Short text, required)
- **slug** (Short text, required, unique)
- **description** (Long text)
- **icon** (Short text) - icon name from your icon set

#### Supplier
- **name** (Short text, required)
- **slug** (Short text, required, unique)
- **description** (Long text, required)
- **logo** (Media, single image)
- **website** (Short text) - URL
- **categories** (References, many, to Category)
- **featured** (Boolean, default false)
- **tier** (Short text) - Dropdown: standard, premium, partner
- **contactEmail** (Short text)
- **contactPhone** (Short text)

#### Speaker
- **name** (Short text, required)
- **slug** (Short text, required, unique)
- **role** (Short text, required)
- **company** (Short text, required)
- **bio** (Rich text)
- **headshot** (Media, single image)
- **linkedIn** (Short text) - URL

#### Event
- **title** (Short text, required)
- **slug** (Short text, required, unique)
- **date** (Date & time, required)
- **endDate** (Date & time)
- **location** (Short text, required)
- **address** (Short text)
- **description** (Rich text, required)
- **shortDescription** (Long text, required) - max 200 chars
- **featuredImage** (Media, single image)
- **speakers** (References, many, to Speaker)
- **eventbriteId** (Short text)
- **eventbriteUrl** (Short text) - URL
- **eventType** (Short text) - Dropdown: workshop, networking, summit, webinar
- **isCornerstone** (Boolean, default false)
- **ticketPrice** (Number, decimal)
- **memberPrice** (Number, decimal)

#### Author
- **name** (Short text, required)
- **slug** (Short text, required, unique)
- **role** (Short text)
- **bio** (Long text)
- **headshot** (Media, single image)

#### Article
- **title** (Short text, required)
- **slug** (Short text, required, unique)
- **publishDate** (Date, required)
- **author** (Reference, single, to Author, required)
- **type** (Short text, required) - Dropdown: salt_report, rec_matters
- **shortDescription** (Long text, required) - max 200 chars
- **content** (Rich text, required)
- **featuredImage** (Media, single image)
- **tags** (Short text, list)

#### Membership Tier
- **name** (Short text, required)
- **slug** (Short text, required, unique)
- **price** (Number, integer, required)
- **description** (Short text, required)
- **features** (Short text, list, required)
- **ctaText** (Short text, required)
- **ctaUrl** (Short text, required)
- **highlighted** (Boolean, default false)
- **tierType** (Short text, required) - Dropdown: member, supplier

#### Site Settings (Singleton)
- **siteName** (Short text, required)
- **tagline** (Short text, required)
- **description** (Long text, required)
- **logo** (Media, single image, required)
- **contactEmail** (Short text, required)
- **contactPhone** (Short text, required)
- **whatsappNumber** (Short text, required)

### Option 2: Import via CLI

If you want to import programmatically:

```bash
# Install Contentful CLI
npm install -g contentful-cli

# Login to Contentful
contentful login

# Use space
contentful space use

# Import content model (you'd need to create the export first)
contentful space import --content-file ./content-model-export.json
```

## Initial Content to Create

After setting up models, create this initial content:

### Categories (create these first)
1. Automation
2. BD Tool/Marketing
3. Back Office Support
4. Banking & Finance
5. Business Development
6. CRM
7. Consulting
8. Data/Analytics
9. Diversity & Inclusion
10. Feedback
11. IT Support
12. Insurance
13. Job Board Solutions
14. Job Boards
15. Lead Generation
16. Learning and Training
17. Legal
18. Marketing
19. Sourcing
20. Technology
21. Telecommunications
22. Umbrella Services
23. Website Services

### Authors
1. John Salt - for Salt Reports
2. Simon Lewis - for Rec Matters

### Membership Tiers
1. Member - £39/month
2. Supplier - £149/month

### Site Settings
Create one entry with your site configuration.

## Permissions for Simon

In Contentful Settings → Users & Roles:

1. Create a role called "Content Editor"
2. Allow create/edit on:
   - Supplier
   - Event
   - Article
   - Speaker
   - Author
3. Deny access to:
   - Category (you manage these)
   - Membership Tier
   - Site Settings

Invite Simon with this role.
