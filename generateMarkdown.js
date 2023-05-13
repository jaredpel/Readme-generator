function renderContributingSection(confirmContributers, data) {
    if (!confirmContributers) {
        return `
        will not be accepting contributions with third parties`;
    } else {
        return `
        ${data}`;
    }
}

function renderLicenseBadge(lisence) {
    if (lisence !=="None") {
        return `![Badge] (https://img.sheilds.io/badge/Lisence-${lisence}-blue)`
    }
    return ``;
}

function renderLicenseLink(lisence) {
    if (lisence !== "None") {
        return `- [Lisence](#lisence)`
    }
    return ``;
}

function renderLicenseSection(lisence) {
    if (lisence !== "None") {
        return `## Lisence
        this application is covered by ${lisence} lisence`
    }
    return ``;
}

function generateMarkdown(data) {
    return`
    # ${data.title}
    ${renderLicenseBadge(data.lisence)}
    
    ## Description
    ${data.description}

    ## Table of content
    -[Installation](#installation)
    -[Usage](#usage)
    
    ${renderLicenseLink(data.lisence)}
    -[Contributing](#contributing)
    -[Test](#test)
    -[Questions](#questions)
    
    ##Installation
    ${data.installation}

    ##Usage
    ${data.usage}
    ${renderLicenseSection(data.lisence)}
    
    ##Contributing
    ${data.contributing}
    
    ##Test
    ${data.test}
    
    ##Questions
    Contact me at: 
    ${data.email}
    [GitHub](https://github.com/${data.githubusername})
    [Email: ${data.email}] (Mailto:${data.emai})
    `;
}

module.exports = generateMarkdown;