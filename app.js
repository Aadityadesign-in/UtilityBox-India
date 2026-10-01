/* =========================================================
   UTILITYBOX INDIA
   DYNAMIC TOOL ENGINE
   ========================================================= */


/* =========================================================
   1. TOOL DATABASE
   ========================================================= */

const tools = [

    /* ================= IMAGE ================= */

    {
        id: "image-compressor",
        name: "Image Compressor",
        icon: "🗜️",
        category: "Photo & Image",
        description: "Compress JPG, PNG and WebP images easily.",
        keywords: [
            "compress",
            "image",
            "photo",
            "jpg",
            "jpeg",
            "png",
            "webp",
            "size",
            "reduce"
        ],
        type: "page",
        page: "tools/image-compressor.html",
        popular: true
    },

    {
        id: "image-resizer",
        name: "Image Resizer",
        icon: "📐",
        category: "Photo & Image",
        description: "Resize your images to any required dimensions.",
        keywords: [
            "resize",
            "image",
            "photo",
            "width",
            "height"
        ],
        type: "dynamic",
        popular: true
    },
    {
        id: "image-compressor",
        name: "Image Compressor",
        category: "Photo & Image",
        description: "Compress JPG, PNG and WebP images while keeping good quality.",
        icon: "🗜️",
        type: "dynamic"
    },

    {
        id: "image-converter",
        name: "Image Converter",
        category: "Photo & Image",
        description: "Convert images between JPG, PNG and WebP formats.",
        icon: "🔄",
        type: "dynamic"
    },

    {
        id: "image-info",
        name: "Image Information",
        category: "Photo & Image",
        description: "Check image dimensions, file size, format and other details.",
        icon: "ℹ️",
        type: "dynamic"
    },

    {
        id: "image-to-pdf",
        name: "Image to PDF",
        icon: "🖼️",
        category: "PDF & Documents",
        description: "Convert images into a PDF document.",
        keywords: [
            "image",
            "pdf",
            "jpg",
            "png",
            "convert"
        ],
        type: "dynamic",
        popular: true
    },

    {
        id: "pdf-compressor",
        name: "PDF Compressor",
        icon: "📄",
        category: "PDF & Documents",
        description: "Reduce PDF file size.",
        keywords: [
            "pdf",
            "compress",
            "file",
            "size"
        ],
        type: "dynamic"
    },

    {
        id: "pdf-to-image",
        name: "PDF to Image",
        icon: "📑",
        category: "PDF & Documents",
        description: "Convert PDF pages into images.",
        keywords: [
            "pdf",
            "image",
            "convert",
            "jpg",
            "png"
        ],
        type: "dynamic"
    },

    {
        id: "merge-pdf",
        name: "Merge PDF",
        icon: "🔗",
        category: "PDF & Documents",
        description: "Combine multiple PDF files into one.",
        keywords: [
            "pdf",
            "merge",
            "combine",
            "join"
        ],
        type: "dynamic"
    },

    {
        id: "split-pdf",
        name: "Split PDF",
        icon: "✂️",
        category: "PDF & Documents",
        description: "Split a PDF into separate files.",
        keywords: [
            "pdf",
            "split",
            "separate"
        ],
        type: "dynamic"
    },

    {
        id: "passport-photo",
        name: "Passport Photo",
        icon: "🪪",
        category: "Photo & Image",
        description: "Prepare passport-size photos.",
        keywords: [
            "passport",
            "photo",
            "id",
            "document"
        ],
        type: "dynamic"
    },


    /* ================= CALCULATORS ================= */

    {
        id: "percentage",
        name: "Percentage Calculator",
        icon: "%",
        category: "Calculators",
        description: "Calculate percentages quickly.",
        keywords: [
            "percentage",
            "percent",
            "math",
            "calculate"
        ],
        type: "dynamic",
        popular: true
    },
    {
    id: "marks-percentage",
    name: "Marks Percentage Calculator",
    category: "Student",
    description: "Calculate your exam percentage instantly.",
    icon: "📊",
    type: "dynamic"
},

{
    id: "grade-calculator",
    name: "Grade Calculator",
    category: "Student",
    description: "Find your grade from your percentage.",
    icon: "📝",
    type: "dynamic"
},

{
    id: "target-marks",
    name: "Target Marks Calculator",
    category: "Student",
    description: "Calculate how many marks you need to reach your target percentage.",
    icon: "🎯",
    type: "dynamic"
},

{
    id: "study-time",
    name: "Study Time Calculator",
    category: "Student",
    description: "Calculate study time available for each subject.",
    icon: "⏱️",
    type: "dynamic"
},

{
    id: "study-schedule",
    name: "Study Schedule Generator",
    category: "Student",
    description: "Create a simple study schedule from your available time.",
    icon: "📚",
    type: "dynamic"
},

    {
        id: "age-calculator",
        name: "Age Calculator",
        icon: "🎂",
        category: "Calculators",
        description: "Calculate exact age from date of birth.",
        keywords: [
            "age",
            "dob",
            "date",
            "birth"
        ],
        type: "dynamic",
        popular: true
    },

    {
        id: "discount-calculator",
        name: "Discount Calculator",
        icon: "🏷️",
        category: "Calculators",
        description: "Calculate discounts and final prices.",
        keywords: [
            "discount",
            "price",
            "sale",
            "percentage"
        ],
        type: "dynamic"
    },

    {
        id: "profit-loss",
        name: "Profit & Loss",
        icon: "📈",
        category: "Calculators",
        description: "Calculate profit, loss and percentages.",
        keywords: [
            "profit",
            "loss",
            "business",
            "percentage"
        ],
        type: "dynamic"
    },

    {
        id: "simple-interest",
        name: "Simple Interest",
        icon: "💰",
        category: "Calculators",
        description: "Calculate simple interest.",
        keywords: [
            "simple",
            "interest",
            "finance",
            "math"
        ],
        type: "dynamic"
    },

    {
        id: "compound-interest",
        name: "Compound Interest",
        icon: "💹",
        category: "Calculators",
        description: "Calculate compound interest.",
        keywords: [
            "compound",
            "interest",
            "finance"
        ],
        type: "dynamic"
    },

    {
        id: "emi-calculator",
        name: "EMI Calculator",
        icon: "🏦",
        category: "Calculators",
        description: "Calculate monthly loan EMI.",
        keywords: [
            "emi",
            "loan",
            "finance",
            "bank"
        ],
        type: "dynamic",
        popular: true
    },

    {
        id: "gst-calculator",
        name: "GST Calculator",
        icon: "🧾",
        category: "Calculators",
        description: "Calculate GST amount and final price.",
        keywords: [
            "gst",
            "tax",
            "india",
            "business"
        ],
        type: "dynamic"
    },

    {
        id: "cgpa-calculator",
        name: "CGPA Calculator",
        icon: "🎓",
        category: "Student",
        description: "Calculate CGPA from your marks or grades.",
        keywords: [
            "cgpa",
            "student",
            "marks",
            "grade"
        ],
        type: "dynamic",
        popular: true
    },

    {
        id: "attendance-calculator",
        name: "Attendance Calculator",
        icon: "📅",
        category: "Student",
        description: "Calculate attendance percentage.",
        keywords: [
            "attendance",
            "college",
            "school",
            "student"
        ],
        type: "dynamic"
    },


    /* ================= STUDENT ================= */

    {
        id: "study-timer",
        name: "Study Timer",
        icon: "⏱️",
        category: "Student",
        description: "Use a simple focused study timer.",
        keywords: [
            "study",
            "timer",
            "pomodoro",
            "student"
        ],
        type: "dynamic",
        popular: true
    },

    {
        id: "exam-countdown",
        name: "Exam Countdown",
        icon: "⏳",
        category: "Student",
        description: "Countdown to your important exam.",
        keywords: [
            "exam",
            "countdown",
            "student",
            "date"
        ],
        type: "dynamic"
    },
    {
    id: "lcm-calculator",
    name: "LCM Calculator",
    category: "Math",
    description: "Calculate the Least Common Multiple of two or more numbers.",
    icon: "🔢",
    type: "dynamic"
},

{
    id: "hcf-calculator",
    name: "HCF / GCD Calculator",
    category: "Math",
    description: "Calculate the Highest Common Factor or Greatest Common Divisor.",
    icon: "🔢",
    type: "dynamic"
},

{
    id: "prime-checker",
    name: "Prime Number Checker",
    category: "Math",
    description: "Check whether a number is prime or not.",
    icon: "🧮",
    type: "dynamic"
},

{
    id: "factorial-calculator",
    name: "Factorial Calculator",
    category: "Math",
    description: "Calculate the factorial of a positive integer.",
    icon: "🔢",
    type: "dynamic"
},

{
    id: "area-calculator",
    name: "Area Calculator",
    category: "Math",
    description: "Calculate the area of common geometric shapes.",
    icon: "📐",
    type: "dynamic"
},

{
    id: "volume-calculator",
    name: "Volume Calculator",
    category: "Math",
    description: "Calculate the volume of common 3D shapes.",
    icon: "📦",
    type: "dynamic"
},

{
    id: "number-system",
    name: "Number System Converter",
    category: "Math",
    description: "Convert numbers between Binary, Decimal, Octal and Hexadecimal.",
    icon: "🔢",
    type: "dynamic"
},

{
    id: "ratio-proportion",
    name: "Ratio & Proportion Calculator",
    category: "Math",
    description: "Calculate ratios and solve simple proportions.",
    icon: "📊",
    type: "dynamic"
},


    /* ================= TEXT ================= */

    {
        id: "word-counter",
        name: "Word Counter",
        icon: "🔢",
        category: "Text",
        description: "Count words, characters and lines.",
        keywords: [
            "word",
            "character",
            "count",
            "text"
        ],
        type: "dynamic",
        popular: true
    },

    {
        id: "case-converter",
        name: "Case Converter",
        icon: "Aa",
        category: "Text",
        description: "Convert text to uppercase, lowercase and more.",
        keywords: [
            "case",
            "uppercase",
            "lowercase",
            "text"
        ],
        type: "dynamic"
    },

    {
        id: "text-cleaner",
        name: "Text Cleaner",
        icon: "🧹",
        category: "Text",
        description: "Clean extra spaces and unwanted line breaks.",
        keywords: [
            "clean",
            "text",
            "spaces",
            "remove"
        ],
        type: "dynamic"
    },


    /* ================= QR ================= */

    {
        id: "qr-generator",
        name: "QR Generator",
        icon: "▦",
        category: "QR & Barcode",
        description: "Generate QR codes from text or links.",
        keywords: [
            "qr",
            "code",
            "generator",
            "link"
        ],
        type: "dynamic",
        popular: true
    },

    {
        id: "wifi-qr",
        name: "Wi-Fi QR",
        icon: "📶",
        category: "QR & Barcode",
        description: "Create a QR code for Wi-Fi sharing.",
        keywords: [
            "wifi",
            "qr",
            "password",
            "internet"
        ],
        type: "dynamic"
    },

    {
        id: "text-to-qr",
        name: "Text to QR",
        icon: "🔳",
        category: "QR & Barcode",
        description: "Convert text into a QR code.",
        keywords: [
            "text",
            "qr",
            "code"
        ],
        type: "dynamic"
    },


    /* ================= MOBILE ================= */

    {
        id: "unit-converter",
        name: "Unit Converter",
        icon: "📏",
        category: "Mobile Utilities",
        description: "Convert common units instantly.",
        keywords: [
            "unit",
            "convert",
            "length",
            "weight",
            "temperature"
        ],
        type: "dynamic",
        popular: true
    },

    {
        id: "data-converter",
        name: "Data Converter",
        icon: "💾",
        category: "Mobile Utilities",
        description: "Convert KB, MB, GB and other data units.",
        keywords: [
            "data",
            "kb",
            "mb",
            "gb",
            "storage"
        ],
        type: "dynamic"
    },


    /* ================= DEVELOPER ================= */

    {
        id: "json-formatter",
        name: "JSON Formatter",
        icon: "{ }",
        category: "Developer",
        description: "Format and validate JSON data.",
        keywords: [
            "json",
            "developer",
            "code",
            "format"
        ],
        type: "dynamic"
    },

    {
        id: "base64",
        name: "Base64 Encoder",
        icon: "🔐",
        category: "Developer",
        description: "Encode and decode Base64 text.",
        keywords: [
            "base64",
            "encode",
            "decode",
            "developer"
        ],
        type: "dynamic"
    },

    {
        id: "url-encoder",
        name: "URL Encoder",
        icon: "🔗",
        category: "Developer",
        description: "Encode and decode URLs.",
        keywords: [
            "url",
            "encode",
            "decode",
            "developer"
        ],
        type: "dynamic"
    },
    {
    id: "age-calculator",
    name: "Age Calculator",
    category: "Calculators",
    description: "Calculate your exact age from date of birth.",
    icon: "🎂",
    type: "dynamic"
},
{
    id: "date-difference",
    name: "Date Difference",
    category: "Calculators",
    description: "Calculate the difference between two dates.",
    icon: "📅",
    type: "dynamic"
},
{
    id: "average-calculator",
    name: "Average Calculator",
    category: "Calculators",
    description: "Calculate the average of multiple numbers.",
    icon: "🧮",
    type: "dynamic"
},
{
    id: "ratio-calculator",
    name: "Ratio Calculator",
    category: "Calculators",
    description: "Simplify ratios and calculate equivalent ratios.",
    icon: "⚖️",
    type: "dynamic"
},
{
    id: "percentage-change",
    name: "Percentage Change",
    category: "Calculators",
    description: "Calculate percentage increase or decrease between two values.",
    icon: "📈",
    type: "dynamic"
},

{
    id: "sip-calculator",
    name: "SIP Calculator",
    category: "Calculators",
    description: "Calculate estimated SIP investment returns.",
    icon: "💰",
    type: "dynamic"
},

{
    id: "loan-calculator",
    name: "Loan Calculator",
    category: "Calculators",
    description: "Calculate EMI, total interest and total payment.",
    icon: "🏦",
    type: "dynamic"
},

{
    id: "salary-calculator",
    name: "Salary Calculator",
    category: "Calculators",
    description: "Calculate annual salary, monthly salary and estimated deductions.",
    icon: "💼",
    type: "dynamic"
},

{
    id: "number-to-words",
    name: "Number to Words",
    category: "Calculators",
    description: "Convert numbers into Indian number words and rupee format.",
    icon: "🔢",
    type: "dynamic"
},

{
    id: "password-generator",
    name: "Password Generator",
    category: "Security",
    description: "Generate a random password with customizable options.",
    icon: "🔐",
    type: "dynamic"
},
{
    id: "random-number",
    name: "Random Number Generator",
    category: "Student",
    description: "Generate random numbers between any minimum and maximum value.",
    icon: "🎲",
    type: "dynamic"
},

{
    id: "random-choice",
    name: "Random Choice Picker",
    category: "Student",
    description: "Pick one random choice from a list of options.",
    icon: "🎯",
    type: "dynamic"
},

{
    id: "lucky-number",
    name: "Lucky Number Generator",
    category: "Student",
    description: "Generate a random lucky number instantly.",
    icon: "🍀",
    type: "dynamic"
},

];

/* =========================================================
   2. CATEGORIES
   ========================================================= */

const categoryMeta = {
    "PDF & Documents": {
        icon: "📄",
        description: "PDF and document tools"
    },

    "Photo & Image": {
        icon: "🖼️",
        description: "Image editing utilities"
    },

    "Student": {
        icon: "🎓",
        description: "Tools for students"
    },

    "Calculators": {
        icon: "🧮",
        description: "Everyday calculators"
    },

    "Math": {
        icon: "➗",
        description: "Mathematics and calculation tools"
    },

    "QR & Barcode": {
        icon: "▦",
        description: "QR code utilities"
    },

    "Text": {
        icon: "📝",
        description: "Text utilities"
    },

    "Mobile Utilities": {
        icon: "📱",
        description: "Useful mobile tools"
    },

    "Developer": {
        icon: "💻",
        description: "Developer utilities"
    }
};


/* =========================================
   DYNAMIC CATEGORY SYSTEM
========================================= */

const categories = [
    ...new Set(
        tools
            .map(tool => tool.category)
            .filter(Boolean)
    )
].map(categoryName => {

    const meta = categoryMeta[categoryName];

    return {
        name: categoryName,

        icon: meta?.icon || "🧰",

        description:
            meta?.description ||
            `${categoryName} tools`
    };
});


/* =========================================================
   3. DOM
   ========================================================= */

const toolGrid =
    document.getElementById("toolGrid");

const popularGrid =
    document.getElementById("popularGrid");

const categoryGrid =
    document.getElementById("categoryGrid");

const toolSearch =
    document.getElementById("toolSearch");

const clearSearch =
    document.getElementById("clearSearch");

const emptyState =
    document.getElementById("emptyState");

const toolCount =
    document.getElementById("toolCount");

const resetSearchBtn =
    document.getElementById("resetSearchBtn");

const viewAllBtn =
    document.getElementById("viewAllBtn");

const themeBtn =
    document.getElementById("themeBtn");

const mobileThemeBtn =
    document.getElementById("mobileThemeBtn");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileNav =
    document.getElementById("mobileNav");

const toolModal =
    document.getElementById("toolModal");

const toolModalBody =
    document.getElementById("toolModalBody");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");

const toast =
    document.getElementById("toast");

const installBtn =
    document.getElementById("installBtn");

const currentYear =
    document.getElementById("currentYear");

const recentSection =
    document.getElementById("recentSection");

const recentToolsGrid =
    document.getElementById("recentToolsGrid");

const favoriteSection =
    document.getElementById("favoriteSection");

const favoriteToolsGrid =
    document.getElementById("favoriteToolsGrid");


/* =========================================================
   4. STATE
   ========================================================= */

let currentTools = [...tools];

let showingAll = false;


/* =========================================================
   FAVORITE TOOLS
   ========================================================= */

const FAVORITE_TOOLS_KEY =
    "utilitybox_favorite_tools";

function getFavoriteTools() {

    try {

        const data =
            JSON.parse(
                localStorage.getItem(
                    FAVORITE_TOOLS_KEY
                ) || "[]"
            );

        return Array.isArray(data)
            ? data
            : [];

    } catch (error) {

        return [];

    }

}

function saveFavoriteTools(ids) {

    try {

        localStorage.setItem(
            FAVORITE_TOOLS_KEY,
            JSON.stringify(ids)
        );

    } catch (error) {

        console.warn(
            "Favorite tools save failed:",
            error
        );

    }

}

function isFavoriteTool(toolId) {

    return getFavoriteTools()
        .includes(toolId);

}

function toggleFavoriteTool(tool) {

    if (!tool || !tool.id) return;

    let favorites =
        getFavoriteTools();

    if (favorites.includes(tool.id)) {

        favorites =
            favorites.filter(
                id => id !== tool.id
            );

        showToast(
            `${tool.name} removed from favorites`
        );

    } else {

        favorites.push(tool.id);

        showToast(
            `${tool.name} added to favorites ⭐`
        );

    }

    saveFavoriteTools(favorites);

    renderTools();
    renderPopular();
    renderFavoriteTools();

}

function renderFavoriteTools() {

    const section =
        document.getElementById(
            "favoriteSection"
        );

    const grid =
        document.getElementById(
            "favoriteToolsGrid"
        );

    if (!section || !grid) return;

    const favorites =
        getFavoriteTools()
            .map(id =>
                tools.find(
                    tool => tool.id === id
                )
            )
            .filter(Boolean);

    grid.innerHTML = "";

    if (!favorites.length) {

        section.hidden = true;

        return;

    }

    section.hidden = false;

    favorites.forEach(tool => {

        grid.appendChild(
            createToolCard(tool)
        );

    });

}


/* =========================================================
   5. TOOL CARD
   ========================================================= */

function createToolCard(tool) {

    const card =
        document.createElement("article");

    card.className = "tool-card";

    card.dataset.toolId = tool.id;

    const status =
        tool.type === "coming-soon"
            ? `<span class="tool-status">Soon</span>`
            : "";

    const favorite =
        isFavoriteTool(tool.id);

    card.innerHTML = `

        <div class="tool-card-top">

            <div class="tool-icon">
                ${tool.icon}
            </div>

            ${status}

            <button
                class="favorite-btn ${favorite ? "active" : ""}"
                type="button"
                aria-label="${
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }"
                title="${
                    favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }"
            >
                ${favorite ? "★" : "☆"}
            </button>

        </div>

        <h3>
            ${escapeHTML(tool.name)}
        </h3>

        <p>
            ${escapeHTML(tool.description)}
        </p>

        <div class="tool-card-bottom">

            <span class="tool-category">
                ${escapeHTML(tool.category)}
            </span>

            <span class="tool-arrow">
                →
            </span>

        </div>

    `;

    const favoriteBtn =
        card.querySelector(
            ".favorite-btn"
        );

    favoriteBtn?.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleFavoriteTool(tool);

        }
    );

    card.addEventListener(
        "click",
        () => {

            openTool(tool);

        }
    );

    return card;

}


/* =========================================================
   6. RENDER TOOLS
   ========================================================= */

function renderTools(list = currentTools) {

    toolGrid.innerHTML = "";

    if (!list.length) {

        emptyState.hidden = false;

        toolCount.textContent =
            "No matching tools found.";

        return;

    }

    emptyState.hidden = true;

    const visibleTools =
        showingAll
            ? list
            : list.slice(0, 12);

    visibleTools.forEach(tool => {

        toolGrid.appendChild(
            createToolCard(tool)
        );

    });

    toolCount.textContent =
        `${list.length} tools available`;

    viewAllBtn.textContent =
        showingAll || list.length <= 12
            ? "Show Less"
            : "View All";
}


/* =========================================================
   7. RENDER POPULAR
   ========================================================= */

function renderPopular() {

    popularGrid.innerHTML = "";

    const popularTools =
        tools
            .filter(tool => tool.popular)
            .slice(0, 8);

    popularTools.forEach(tool => {

        popularGrid.appendChild(
            createToolCard(tool)
        );

    });

}

/* =========================================================
   QUICK ACCESS — RECENTLY USED
   ========================================================= */

function renderRecentTools() {

    const recentSection =
        document.getElementById("recentSection");

    const recentToolsGrid =
        document.getElementById("recentToolsGrid");

    if (
        !recentSection ||
        !recentToolsGrid
    ) {
        return;
    }

    const recentTools =
        getRecentToolObjects();

    recentToolsGrid.innerHTML = "";

    if (!recentTools.length) {

        recentSection.hidden = true;

        return;
    }

    recentSection.hidden = false;

    recentTools.forEach(tool => {

        recentToolsGrid.appendChild(
            createToolCard(tool)
        );

    });
}

  /* =========================================================
   QUICK ACCESS
   ========================================================= */

function renderQuickAccessSections() {

    if (
        !recentSection ||
        !recentToolsGrid ||
        !favoriteSection ||
        !favoriteToolsGrid
    ) {
        return;
    }


    /* =========================
       RECENTLY USED
    ========================= */

    const recentTools =
        getRecentToolObjects();

    recentToolsGrid.innerHTML = "";

    if (recentTools.length) {

        recentSection.hidden = false;

        recentTools.forEach(tool => {

            recentToolsGrid.appendChild(
                createToolCard(tool)
            );

        });

    } else {

        recentSection.hidden = true;

    }


    /* =========================
       FAVORITES
    ========================= */

    const favoriteTools =
        getFavoriteToolObjects();

    favoriteToolsGrid.innerHTML = "";

    if (favoriteTools.length) {

        favoriteSection.hidden = false;

        favoriteTools.forEach(tool => {

            favoriteToolsGrid.appendChild(
                createToolCard(tool)
            );

        });

    } else {

        favoriteSection.hidden = true;

    }

}

/* =========================================================
   RECENTLY USED TOOLS
   ========================================================= */

const RECENT_TOOLS_KEY =
    "utilitybox_recent_tools";

function getRecentTools() {

    try {

        const data =
            JSON.parse(
                localStorage.getItem(
                    RECENT_TOOLS_KEY
                ) || "[]"
            );

        return Array.isArray(data)
            ? data
            : [];

    } catch (error) {

        console.warn(
            "Recent tools read failed:",
            error
        );

        return [];

    }

}


function saveRecentTools(ids) {

    try {

        localStorage.setItem(
            RECENT_TOOLS_KEY,
            JSON.stringify(ids)
        );

    } catch (error) {

        console.warn(
            "Recent tools save failed:",
            error
        );

    }

}


function addToRecentTools(tool) {

    if (!tool || !tool.id) {
        return;
    }

    let recent =
        getRecentTools();

    recent =
        recent.filter(
            id => id !== tool.id
        );

    recent.unshift(tool.id);

    recent =
        recent.slice(0, 8);

    saveRecentTools(recent);

    renderQuickAccessSections();

}


function getRecentToolObjects() {

    return getRecentTools()
        .map(id =>
            tools.find(
                tool => tool.id === id
            )
        )
        .filter(Boolean);

}


function getFavoriteToolObjects() {

    return getFavoriteTools()
        .map(id =>
            tools.find(
                tool => tool.id === id
            )
        )
        .filter(Boolean);

}

/* =========================================================
   8. RENDER CATEGORIES
   ========================================================= */

function renderCategories() {

    categoryGrid.innerHTML = "";

    categories.forEach(category => {

        const card =
            document.createElement("button");

        card.className =
            "category-card";

            const isActive =
    currentTools.length > 0 &&
    currentTools.every(
        tool => tool.category === category.name
    );

if (isActive) {
    card.classList.add("active");
}

        card.innerHTML = `

            <span class="category-icon">
                ${category.icon}
            </span>

            <span class="category-info">

                <strong>
                    ${escapeHTML(category.name)}
                </strong>

                <small>
                    ${escapeHTML(category.description)}
                </small>

            </span>

            <span class="category-arrow">
                →
            </span>

        `;

        card.addEventListener(
            "click",
            () => {

                filterCategory(
                    category.name
                );

            }
        );

        categoryGrid.appendChild(card);

    });

}


/* =========================================================
   9. SEARCH
   ========================================================= */

function searchTools(query) {

    const value =
        query
            .trim()
            .toLowerCase();

    if (!value) {

        currentTools = [...tools];

        showingAll = false;

        renderTools();

        return;

    }

    currentTools =
        tools.filter(tool => {

            const searchableText = [

                tool.name,

                tool.category,

                tool.description,

                ...(tool.keywords || [])

            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(value);

        });

    showingAll = true;

    renderTools(currentTools);

    trackEvent(
        "search",
        {
            query: value,
            results: currentTools.length
        }
    );

}


/* =========================================================
   10. CATEGORY FILTER
   ========================================================= */

function filterCategory(category) {

    toolSearch.value = "";

    currentTools =
        tools.filter(
            tool =>
                tool.category === category
        );

    showingAll = true;

    renderTools(currentTools);

    document
        .getElementById("tools")
        ?.scrollIntoView({
            behavior: "smooth"
        });

    trackEvent(
        "category_open",
        {
            category
        }
    );

}


/* =========================================================
   11. OPEN TOOL
   ========================================================= */

function openTool(tool) {

    if (!tool) {
        return;
    }

    try {
        trackToolUsage(tool);

        addToRecentTools(tool);

    } catch (error) {

        console.warn(
            "UtilityBox tool analytics failed:",
            error
        );
    }

    if (
        tool.type === "page" &&
        tool.page
    ) {
        window.location.href =
            tool.page;

        return;
    }

    const dynamicTools = [
        "date-difference",
        "average-calculator"
    ];

    if (
        dynamicTools.includes(tool.id)
    ) {
        openDynamicTool(tool);
        return;
    }

    if (
        tool.type === "dynamic"
    ) {
        openDynamicTool(tool);
        return;
    }

    showToast(
        `${tool.name || "This tool"} is coming soon 🚀`
    );
}

/* =========================================================
   12. DYNAMIC TOOL ENGINE
   ========================================================= */

function openDynamicTool(tool) {

    toolModalBody.innerHTML = "";

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "dynamic-tool-wrapper";

    wrapper.innerHTML = `

        <div class="dynamic-tool-header">

            <div class="dynamic-tool-icon">
                ${tool.icon}
            </div>

            <div>

                <span class="section-label">
                    UTILITYBOX TOOL
                </span>

                <h2>
                    ${escapeHTML(tool.name)}
                </h2>

                <p>
                    ${escapeHTML(tool.description)}
                </p>

            </div>

        </div>

        <div
            class="dynamic-tool-interface"
            id="dynamicToolInterface"
        >
        </div>

    `;

    toolModalBody.appendChild(wrapper);

    const interfaceBox =
        document.getElementById(
            "dynamicToolInterface"
        );

    loadToolInterface(
        tool.id,
        interfaceBox
    );

    toolModal.classList.add("active");

    toolModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   13. TOOL INTERFACE ROUTER
   ========================================================= */

function loadToolInterface(
    toolId,
    container
) {

    const handlers = {

        "percentage":
            renderPercentageTool,

        "age-calculator":
            renderAgeCalculator,

        "discount-calculator":
            renderDiscountCalculator,

        "profit-loss":
            renderProfitLoss,

        "simple-interest":
            renderSimpleInterest,

        "compound-interest":
            renderCompoundInterest,

        "emi-calculator":
            renderEMI,

        "gst-calculator":
            renderGST,

        "cgpa-calculator":
            renderCGPA,

        "attendance-calculator":
            renderAttendance,

        "study-timer":
            renderStudyTimer,

        "exam-countdown":
            renderExamCountdown,

        "word-counter":
            renderWordCounter,

        "case-converter":
            renderCaseConverter,

        "text-cleaner":
            renderTextCleaner,

        "qr-generator":
            renderQRGenerator,

        "text-to-qr":
            renderQRGenerator,

        "wifi-qr":
            renderWifiQR,

        "unit-converter":
            renderUnitConverter,

        "data-converter":
            renderDataConverter,

        "json-formatter":
            renderJSONFormatter,

        "base64":
            renderBase64,

        "url-encoder":
            renderURLEncoder,

        "image-resizer":
            renderImageResizer,
            
        "image-compressor":
            renderImageCompressor,

        "image-converter":
            renderImageConverter,

        "image-info":
            renderImageInfo,

        "image-to-pdf":
            renderImageToPDF,

        "date-difference":
             renderDateDifference,

        "average-calculator":
             renderAverageCalculator,

    };

    const handler =
        handlers[toolId];

    if (handler) {

        handler(container);

        return;

    }

    container.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                🚧
            </div>

            <h3>
                Tool under development
            </h3>

            <p>
                This tool will be available soon.
            </p>

        </div>

    `;

}


/* =========================================================
   14. PERCENTAGE
   ========================================================= */

function renderPercentageTool(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                What is
                <input
                    id="percentValue"
                    type="number"
                    placeholder="e.g. 25"
                >
                % of
                <input
                    id="percentTotal"
                    type="number"
                    placeholder="e.g. 200"
                >
            </label>

            <button
                class="primary-btn"
                id="percentCalculate"
            >
                Calculate
            </button>

            <div
                class="result-box"
                id="percentResult"
            >
                Enter values to calculate.
            </div>

        </div>

    `;

    document
        .getElementById("percentCalculate")
        .onclick = () => {

            const percent =
                Number(
                    document.getElementById(
                        "percentValue"
                    ).value
                );

            const total =
                Number(
                    document.getElementById(
                        "percentTotal"
                    ).value
                );

            if (!Number.isFinite(percent) ||
                !Number.isFinite(total)) {

                showToolError(
                    "Please enter both values."
                );

                return;

            }

            const result =
                (percent / 100) * total;

            document
                .getElementById("percentResult")
                .textContent =
                `${percent}% of ${total} = ${formatNumber(result)}`;

        };

}


/* =========================================================
   15. AGE CALCULATOR
   ========================================================= */

function renderAgeCalculator(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Date of Birth
                <input
                    id="dobInput"
                    type="date"
                >
            </label>

            <button
                class="primary-btn"
                id="ageCalculate"
            >
                Calculate Age
            </button>

            <div
                class="result-box"
                id="ageResult"
            >
                Select your date of birth.
            </div>

        </div>

    `;

    document
        .getElementById("ageCalculate")
        .onclick = () => {

            const value =
                document.getElementById(
                    "dobInput"
                ).value;

            if (!value) {

                showToolError(
                    "Please select your date of birth."
                );

                return;

            }

            const dob =
                new Date(value);

            const today =
                new Date();

            let years =
                today.getFullYear() -
                dob.getFullYear();

            let months =
                today.getMonth() -
                dob.getMonth();

            let days =
                today.getDate() -
                dob.getDate();

            if (days < 0) {

                months--;

                const previousMonth =
                    new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        0
                    );

                days +=
                    previousMonth.getDate();

            }

            if (months < 0) {

                years--;

                months += 12;

            }

            document
                .getElementById("ageResult")
                .textContent =
                `${years} Years, ${months} Months, ${days} Days`;

        };

}


/* =========================================================
   16. DISCOUNT
   ========================================================= */

function renderDiscountCalculator(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Original Price
                <input
                    id="discountPrice"
                    type="number"
                    placeholder="1000"
                >
            </label>

            <label>
                Discount %
                <input
                    id="discountPercent"
                    type="number"
                    placeholder="20"
                >
            </label>

            <button
                class="primary-btn"
                id="discountCalculate"
            >
                Calculate
            </button>

            <div
                class="result-box"
                id="discountResult"
            >
                Enter price and discount.
            </div>

        </div>

    `;

    document
        .getElementById("discountCalculate")
        .onclick = () => {

            const price =
                Number(
                    document.getElementById(
                        "discountPrice"
                    ).value
                );

            const percent =
                Number(
                    document.getElementById(
                        "discountPercent"
                    ).value
                );

            if (price < 0 || percent < 0) {

                showToolError(
                    "Please enter valid values."
                );

                return;

            }

            const saving =
                price * percent / 100;

            const finalPrice =
                price - saving;

            document
                .getElementById("discountResult")
                .innerHTML =

                `You save <strong>₹${formatNumber(saving)}</strong><br>
                 Final Price:
                 <strong>₹${formatNumber(finalPrice)}</strong>`;

        };

}


/* =========================================================
   17. PROFIT LOSS
   ========================================================= */

function renderProfitLoss(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Cost Price
                <input
                    id="plCost"
                    type="number"
                    placeholder="500"
                >
            </label>

            <label>
                Selling Price
                <input
                    id="plSelling"
                    type="number"
                    placeholder="650"
                >
            </label>

            <button
                class="primary-btn"
                id="plCalculate"
            >
                Calculate
            </button>

            <div
                class="result-box"
                id="plResult"
            >
                Enter both prices.
            </div>

        </div>

    `;

    document
        .getElementById("plCalculate")
        .onclick = () => {

            const cost =
                Number(
                    document.getElementById(
                        "plCost"
                    ).value
                );

            const selling =
                Number(
                    document.getElementById(
                        "plSelling"
                    ).value
                );

            if (cost <= 0 ||
                selling <= 0) {

                showToolError(
                    "Please enter valid prices."
                );

                return;

            }

            if (selling > cost) {

                const profit =
                    selling - cost;

                const percent =
                    profit / cost * 100;

                document
                    .getElementById("plResult")
                    .innerHTML =

                    `Profit: <strong>₹${formatNumber(profit)}</strong><br>
                     Profit Percentage:
                     <strong>${formatNumber(percent)}%</strong>`;

            } else if (cost > selling) {

                const loss =
                    cost - selling;

                const percent =
                    loss / cost * 100;

                document
                    .getElementById("plResult")
                    .innerHTML =

                    `Loss: <strong>₹${formatNumber(loss)}</strong><br>
                     Loss Percentage:
                     <strong>${formatNumber(percent)}%</strong>`;

            } else {

                document
                    .getElementById("plResult")
                    .textContent =
                    "No Profit, No Loss.";

            }

        };

}


/* =========================================================
   18. SIMPLE INTEREST
   ========================================================= */

function renderSimpleInterest(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Principal
                <input
                    id="siPrincipal"
                    type="number"
                    placeholder="10000"
                >
            </label>

            <label>
                Rate (% per year)
                <input
                    id="siRate"
                    type="number"
                    placeholder="5"
                >
            </label>

            <label>
                Time (Years)
                <input
                    id="siTime"
                    type="number"
                    placeholder="2"
                >
            </label>

            <button
                class="primary-btn"
                id="siCalculate"
            >
                Calculate
            </button>

            <div
                class="result-box"
                id="siResult"
            >
                Enter the values.
            </div>

        </div>

    `;

    document
        .getElementById("siCalculate")
        .onclick = () => {

            const p =
                Number(
                    document.getElementById(
                        "siPrincipal"
                    ).value
                );

            const r =
                Number(
                    document.getElementById(
                        "siRate"
                    ).value
                );

            const t =
                Number(
                    document.getElementById(
                        "siTime"
                    ).value
                );

            if (p < 0 ||
                r < 0 ||
                t < 0) {

                showToolError(
                    "Please enter valid values."
                );

                return;

            }

            const interest =
                p * r * t / 100;

            const total =
                p + interest;

            document
                .getElementById("siResult")
                .innerHTML =

                `Simple Interest:
                <strong>₹${formatNumber(interest)}</strong><br>
                Total Amount:
                <strong>₹${formatNumber(total)}</strong>`;

        };

}


/* =========================================================
   19. COMPOUND INTEREST
   ========================================================= */

function renderCompoundInterest(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Principal
                <input
                    id="ciPrincipal"
                    type="number"
                    placeholder="10000"
                >
            </label>

            <label>
                Annual Rate (%)
                <input
                    id="ciRate"
                    type="number"
                    placeholder="5"
                >
            </label>

            <label>
                Time (Years)
                <input
                    id="ciTime"
                    type="number"
                    placeholder="2"
                >
            </label>

            <button
                class="primary-btn"
                id="ciCalculate"
            >
                Calculate
            </button>

            <div
                class="result-box"
                id="ciResult"
            >
                Enter the values.
            </div>

        </div>

    `;

    document
        .getElementById("ciCalculate")
        .onclick = () => {

            const p =
                Number(
                    document.getElementById(
                        "ciPrincipal"
                    ).value
                );

            const r =
                Number(
                    document.getElementById(
                        "ciRate"
                    ).value
                );

            const t =
                Number(
                    document.getElementById(
                        "ciTime"
                    ).value
                );

            const amount =
                p *
                Math.pow(
                    1 + r / 100,
                    t
                );

            const interest =
                amount - p;

            document
                .getElementById("ciResult")
                .innerHTML =

                `Compound Interest:
                <strong>₹${formatNumber(interest)}</strong><br>
                Total Amount:
                <strong>₹${formatNumber(amount)}</strong>`;

        };

}


/* =========================================================
   20. EMI
   ========================================================= */

function renderEMI(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Loan Amount
                <input
                    id="emiPrincipal"
                    type="number"
                    placeholder="500000"
                >
            </label>

            <label>
                Annual Interest (%)
                <input
                    id="emiRate"
                    type="number"
                    placeholder="8"
                >
            </label>

            <label>
                Loan Tenure (Years)
                <input
                    id="emiYears"
                    type="number"
                    placeholder="5"
                >
            </label>

            <button
                class="primary-btn"
                id="emiCalculate"
            >
                Calculate EMI
            </button>

            <div
                class="result-box"
                id="emiResult"
            >
                Enter loan details.
            </div>

        </div>

    `;

    document
        .getElementById("emiCalculate")
        .onclick = () => {

            const p =
                Number(
                    document.getElementById(
                        "emiPrincipal"
                    ).value
                );

            const annualRate =
                Number(
                    document.getElementById(
                        "emiRate"
                    ).value
                );

            const years =
                Number(
                    document.getElementById(
                        "emiYears"
                    ).value
                );

            const months =
                years * 12;

            const monthlyRate =
                annualRate / 12 / 100;

            let emi;

            if (monthlyRate === 0) {

                emi =
                    p / months;

            } else {

                emi =
                    p *
                    monthlyRate *
                    Math.pow(
                        1 + monthlyRate,
                        months
                    ) /
                    (
                        Math.pow(
                            1 + monthlyRate,
                            months
                        ) - 1
                    );

            }

            const total =
                emi * months;

            const interest =
                total - p;

            document
                .getElementById("emiResult")
                .innerHTML =

                `Monthly EMI:
                <strong>₹${formatNumber(emi)}</strong><br>
                Total Interest:
                <strong>₹${formatNumber(interest)}</strong><br>
                Total Payment:
                <strong>₹${formatNumber(total)}</strong>`;

        };

}


/* =========================================================
   21. GST
   ========================================================= */

function renderGST(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Amount
                <input
                    id="gstAmount"
                    type="number"
                    placeholder="1000"
                >
            </label>

            <label>
                GST Rate (%)
                <input
                    id="gstRate"
                    type="number"
                    placeholder="18"
                >
            </label>

            <button
                class="primary-btn"
                id="gstCalculate"
            >
                Calculate GST
            </button>

            <div
                class="result-box"
                id="gstResult"
            >
                Enter amount and GST rate.
            </div>

        </div>

    `;

    document
        .getElementById("gstCalculate")
        .onclick = () => {

            const amount =
                Number(
                    document.getElementById(
                        "gstAmount"
                    ).value
                );

            const rate =
                Number(
                    document.getElementById(
                        "gstRate"
                    ).value
                );

            const gst =
                amount * rate / 100;

            const total =
                amount + gst;

            document
                .getElementById("gstResult")
                .innerHTML =

                `GST Amount:
                <strong>₹${formatNumber(gst)}</strong><br>
                Final Amount:
                <strong>₹${formatNumber(total)}</strong>`;

        };

}


/* =========================================================
   22. CGPA
   ========================================================= */

function renderCGPA(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Enter Grade Points
                <input
                    id="cgpaInput"
                    type="text"
                    placeholder="8, 9, 7.5, 8.5"
                >
            </label>

            <button
                class="primary-btn"
                id="cgpaCalculate"
            >
                Calculate CGPA
            </button>

            <div
                class="result-box"
                id="cgpaResult"
            >
                Example: 8, 9, 7.5
            </div>

        </div>

    `;

    document
        .getElementById("cgpaCalculate")
        .onclick = () => {

            const raw =
                document.getElementById(
                    "cgpaInput"
                ).value;

            const values =
                raw
                    .split(",")
                    .map(Number)
                    .filter(
                        Number.isFinite
                    );

            if (!values.length) {

                showToolError(
                    "Please enter grade points."
                );

                return;

            }

            const average =
                values.reduce(
                    (sum, value) =>
                        sum + value,
                    0
                ) / values.length;

            document
                .getElementById("cgpaResult")
                .textContent =
                `CGPA = ${formatNumber(average)}`;

        };

}


/* =========================================================
   23. ATTENDANCE
   ========================================================= */

function renderAttendance(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Classes Attended
                <input
                    id="attended"
                    type="number"
                    placeholder="45"
                >
            </label>

            <label>
                Total Classes
                <input
                    id="totalClasses"
                    type="number"
                    placeholder="50"
                >
            </label>

            <button
                class="primary-btn"
                id="attendanceCalculate"
            >
                Calculate
            </button>

            <div
                class="result-box"
                id="attendanceResult"
            >
                Enter attendance details.
            </div>

        </div>

    `;

    document
        .getElementById(
            "attendanceCalculate"
        )
        .onclick = () => {

            const attended =
                Number(
                    document.getElementById(
                        "attended"
                    ).value
                );

            const total =
                Number(
                    document.getElementById(
                        "totalClasses"
                    ).value
                );

            if (
                total <= 0 ||
                attended < 0 ||
                attended > total
            ) {

                showToolError(
                    "Please enter valid attendance."
                );

                return;

            }

            const percentage =
                attended / total * 100;

            document
                .getElementById(
                    "attendanceResult"
                )
                .textContent =
                `Attendance = ${formatNumber(percentage)}%`;

        };

}


/* =========================================================
   24. WORD COUNTER
   ========================================================= */

function renderWordCounter(container) {

    container.innerHTML = `

        <div class="tool-form">

            <textarea
                id="wordCounterText"
                rows="9"
                placeholder="Type or paste your text here..."
            ></textarea>

            <div
                class="stats-grid"
                id="wordStats"
            >

                <div>
                    <strong>0</strong>
                    <span>Words</span>
                </div>

                <div>
                    <strong>0</strong>
                    <span>Characters</span>
                </div>

                <div>
                    <strong>0</strong>
                    <span>Lines</span>
                </div>

            </div>

        </div>

    `;

    const textarea =
        document.getElementById(
            "wordCounterText"
        );

    const stats =
        document.getElementById(
            "wordStats"
        );

    textarea.addEventListener(
        "input",
        () => {

            const text =
                textarea.value;

            const words =
                text.trim()
                    ? text.trim()
                        .split(/\s+/)
                        .length
                    : 0;

            const chars =
                text.length;

            const lines =
                text
                    ? text.split("\n").length
                    : 0;

            stats.innerHTML = `

                <div>
                    <strong>${words}</strong>
                    <span>Words</span>
                </div>

                <div>
                    <strong>${chars}</strong>
                    <span>Characters</span>
                </div>

                <div>
                    <strong>${lines}</strong>
                    <span>Lines</span>
                </div>

            `;

        }
    );

}


/* =========================================================
   25. CASE CONVERTER
   ========================================================= */

function renderCaseConverter(container) {

    container.innerHTML = `

        <div class="tool-form">

            <textarea
                id="caseText"
                rows="8"
                placeholder="Enter your text..."
            ></textarea>

            <div class="button-group">

                <button
                    class="primary-btn"
                    id="upperCaseBtn"
                >
                    UPPERCASE
                </button>

                <button
                    class="secondary-btn"
                    id="lowerCaseBtn"
                >
                    lowercase
                </button>

                <button
                    class="secondary-btn"
                    id="titleCaseBtn"
                >
                    Title Case
                </button>

            </div>

        </div>

    `;

    const textarea =
        document.getElementById(
            "caseText"
        );

    document
        .getElementById("upperCaseBtn")
        .onclick = () => {

            textarea.value =
                textarea.value.toUpperCase();

        };

    document
        .getElementById("lowerCaseBtn")
        .onclick = () => {

            textarea.value =
                textarea.value.toLowerCase();

        };

    document
        .getElementById("titleCaseBtn")
        .onclick = () => {

            textarea.value =
                textarea.value
                    .toLowerCase()
                    .replace(
                        /\b\w/g,
                        char =>
                            char.toUpperCase()
                    );

        };

}


/* =========================================================
   26. TEXT CLEANER
   ========================================================= */

function renderTextCleaner(container) {

    container.innerHTML = `

        <div class="tool-form">

            <textarea
                id="cleanText"
                rows="9"
                placeholder="Paste your text here..."
            ></textarea>

            <button
                class="primary-btn"
                id="cleanTextBtn"
            >
                Clean Text
            </button>

        </div>

    `;

    document
        .getElementById("cleanTextBtn")
        .onclick = () => {

            const textarea =
                document.getElementById(
                    "cleanText"
                );

            textarea.value =
                textarea.value
                    .replace(
                        /[ \t]+/g,
                        " "
                    )
                    .replace(
                        /\n\s*\n+/g,
                        "\n\n"
                    )
                    .trim();

            showToast(
                "Text cleaned successfully."
            );

        };

}


/* =========================================================
   27. QR GENERATOR
   ========================================================= */

function renderQRGenerator(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Text or URL
                <input
                    id="qrText"
                    type="text"
                    placeholder="https://example.com"
                >
            </label>

            <button
                class="primary-btn"
                id="generateQR"
            >
                Generate QR
            </button>

            <div
                class="qr-result"
                id="qrResult"
            >
                Enter text or URL above.
            </div>

        </div>

    `;

    document
        .getElementById("generateQR")
        .onclick = () => {

            const text =
                document.getElementById(
                    "qrText"
                ).value.trim();

            if (!text) {

                showToolError(
                    "Please enter text or a URL."
                );

                return;

            }

            const qrURL =
                `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;

            document
                .getElementById("qrResult")
                .innerHTML = `

                    <img
                        src="${qrURL}"
                        alt="Generated QR Code"
                        class="qr-image"
                    >

                    <a
                        href="${qrURL}"
                        target="_blank"
                        class="primary-btn"
                        download="utilitybox-qr.png"
                    >
                        Download QR
                    </a>

                `;

        };

}


/* =========================================================
   28. WIFI QR
   ========================================================= */

function renderWifiQR(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Wi-Fi Name
                <input
                    id="wifiSSID"
                    type="text"
                    placeholder="My WiFi"
                >
            </label>

            <label>
                Password
                <input
                    id="wifiPassword"
                    type="text"
                    placeholder="Password"
                >
            </label>

            <label>
                Security
                <select id="wifiSecurity">

                    <option value="WPA">
                        WPA/WPA2
                    </option>

                    <option value="WEP">
                        WEP
                    </option>

                    <option value="">
                        None
                    </option>

                </select>
            </label>

            <button
                class="primary-btn"
                id="wifiGenerate"
            >
                Generate Wi-Fi QR
            </button>

            <div
                class="qr-result"
                id="wifiResult"
            >
            </div>

        </div>

    `;

    document
        .getElementById("wifiGenerate")
        .onclick = () => {

            const ssid =
                document.getElementById(
                    "wifiSSID"
                ).value;

            const password =
                document.getElementById(
                    "wifiPassword"
                ).value;

            const security =
                document.getElementById(
                    "wifiSecurity"
                ).value;

            if (!ssid) {

                showToolError(
                    "Please enter Wi-Fi name."
                );

                return;

            }

            const wifiString =
                `WIFI:T:${security};S:${ssid};P:${password};;`;

            const qrURL =
                `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(wifiString)}`;

            document
                .getElementById("wifiResult")
                .innerHTML = `

                    <img
                        src="${qrURL}"
                        alt="Wi-Fi QR Code"
                        class="qr-image"
                    >

                    <a
                        href="${qrURL}"
                        target="_blank"
                        class="primary-btn"
                    >
                        Open QR
                    </a>

                `;

        };

}


/* =========================================================
   29. UNIT CONVERTER
   ========================================================= */

function renderUnitConverter(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Category

                <select id="unitCategory">

                    <option value="length">
                        Length
                    </option>

                    <option value="weight">
                        Weight
                    </option>

                    <option value="temperature">
                        Temperature
                    </option>

                </select>

            </label>

            <label>
                Value

                <input
                    id="unitValue"
                    type="number"
                    placeholder="10"
                >

            </label>

            <label>
                From

                <select id="unitFrom"></select>

            </label>

            <label>
                To

                <select id="unitTo"></select>

            </label>

            <button
                class="primary-btn"
                id="unitCalculate"
            >
                Convert
            </button>

            <div
                class="result-box"
                id="unitResult"
            >
            </div>

        </div>

    `;

    const category =
        document.getElementById(
            "unitCategory"
        );

    const from =
        document.getElementById(
            "unitFrom"
        );

    const to =
        document.getElementById(
            "unitTo"
        );

    const unitData = {

        length: [
            ["meter", "Meter"],
            ["kilometer", "Kilometer"],
            ["centimeter", "Centimeter"],
            ["millimeter", "Millimeter"],
            ["foot", "Foot"],
            ["inch", "Inch"]
        ],

        weight: [
            ["kg", "Kilogram"],
            ["gram", "Gram"],
            ["pound", "Pound"],
            ["ounce", "Ounce"]
        ],

        temperature: [
            ["celsius", "Celsius"],
            ["fahrenheit", "Fahrenheit"],
            ["kelvin", "Kelvin"]
        ]

    };

    function populate() {

        const list =
            unitData[
                category.value
            ];

        from.innerHTML = "";
        to.innerHTML = "";

        list.forEach(item => {

            from.add(
                new Option(
                    item[1],
                    item[0]
                )
            );

            to.add(
                new Option(
                    item[1],
                    item[0]
                )
            );

        });

    }

    populate();

    category.onchange =
        populate;

    document
        .getElementById(
            "unitCalculate"
        )
        .onclick = () => {

            const value =
                Number(
                    document.getElementById(
                        "unitValue"
                    ).value
                );

            const result =
                convertUnit(
                    value,
                    category.value,
                    from.value,
                    to.value
                );

            document
                .getElementById(
                    "unitResult"
                )
                .textContent =
                `Result = ${formatNumber(result)}`;

        };

}


/* =========================================================
   30. UNIT CONVERSION LOGIC
   ========================================================= */

function convertUnit(
    value,
    category,
    from,
    to
) {

    if (
        category === "temperature"
    ) {

        let celsius;

        if (from === "celsius") {

            celsius = value;

        } else if (
            from === "fahrenheit"
        ) {

            celsius =
                (value - 32) * 5 / 9;

        } else {

            celsius =
                value - 273.15;

        }

        if (to === "celsius") {

            return celsius;

        }

        if (to === "fahrenheit") {

            return celsius * 9 / 5 + 32;

        }

        return celsius + 273.15;

    }


    const lengthRates = {

        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        foot: 0.3048,
        inch: 0.0254

    };

    const weightRates = {

        kg: 1,
        gram: 0.001,
        pound: 0.45359237,
        ounce: 0.0283495231

    };

    const rates =
        category === "length"
            ? lengthRates
            : weightRates;

    return value * rates[from] / rates[to];

}


/* =========================================================
   31. DATA CONVERTER
   ========================================================= */

function renderDataConverter(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Value
                <input
                    id="dataValue"
                    type="number"
                    placeholder="1024"
                >
            </label>

            <label>
                From

                <select id="dataFrom">

                    <option value="byte">
                        Byte
                    </option>

                    <option value="kb">
                        KB
                    </option>

                    <option value="mb">
                        MB
                    </option>

                    <option value="gb">
                        GB
                    </option>

                </select>

            </label>

            <label>
                To

                <select id="dataTo">

                    <option value="byte">
                        Byte
                    </option>

                    <option value="kb">
                        KB
                    </option>

                    <option value="mb">
                        MB
                    </option>

                    <option value="gb">
                        GB
                    </option>

                </select>

            </label>

            <button
                class="primary-btn"
                id="dataCalculate"
            >
                Convert
            </button>

            <div
                class="result-box"
                id="dataResult"
            >
            </div>

        </div>

    `;

    document
        .getElementById(
            "dataCalculate"
        )
        .onclick = () => {

            const value =
                Number(
                    document.getElementById(
                        "dataValue"
                    ).value
                );

            const from =
                document.getElementById(
                    "dataFrom"
                ).value;

            const to =
                document.getElementById(
                    "dataTo"
                ).value;

            const rates = {

                byte: 1,
                kb: 1024,
                mb: 1024 ** 2,
                gb: 1024 ** 3

            };

            const result =
                value *
                rates[from] /
                rates[to];

            document
                .getElementById(
                    "dataResult"
                )
                .textContent =
                `Result = ${formatNumber(result)}`;

        };

}


/* =========================================================
   32. JSON FORMATTER
   ========================================================= */

function renderJSONFormatter(container) {

    container.innerHTML = `

        <div class="tool-form">

            <textarea
                id="jsonInput"
                rows="10"
                placeholder='{"name":"UtilityBox","country":"India"}'
            ></textarea>

            <button
                class="primary-btn"
                id="formatJSON"
            >
                Format JSON
            </button>

            <button
                class="secondary-btn"
                id="minifyJSON"
            >
                Minify JSON
            </button>

            <div
                class="result-box result-code"
                id="jsonResult"
            >
            </div>

        </div>

    `;

    const input =
        document.getElementById(
            "jsonInput"
        );

    const result =
        document.getElementById(
            "jsonResult"
        );

    document
        .getElementById("formatJSON")
        .onclick = () => {

            try {

                const parsed =
                    JSON.parse(input.value);

                result.textContent =
                    JSON.stringify(
                        parsed,
                        null,
                        2
                    );

            } catch {

                result.textContent =
                    "Invalid JSON.";

            }

        };

    document
        .getElementById("minifyJSON")
        .onclick = () => {

            try {

                const parsed =
                    JSON.parse(input.value);

                result.textContent =
                    JSON.stringify(parsed);

            } catch {

                result.textContent =
                    "Invalid JSON.";

            }

        };

}


/* =========================================================
   33. BASE64
   ========================================================= */

function renderBase64(container) {

    container.innerHTML = `

        <div class="tool-form">

            <textarea
                id="base64Input"
                rows="8"
                placeholder="Enter text..."
            ></textarea>

            <div class="button-group">

                <button
                    class="primary-btn"
                    id="base64Encode"
                >
                    Encode
                </button>

                <button
                    class="secondary-btn"
                    id="base64Decode"
                >
                    Decode
                </button>

            </div>

            <textarea
                id="base64Result"
                rows="8"
                readonly
                placeholder="Result..."
            ></textarea>

        </div>

    `;

    const input =
        document.getElementById(
            "base64Input"
        );

    const result =
        document.getElementById(
            "base64Result"
        );

    document
        .getElementById(
            "base64Encode"
        )
        .onclick = () => {

            try {

                result.value =
                    btoa(
                        unescape(
                            encodeURIComponent(
                                input.value
                            )
                        )
                    );

            } catch {

                result.value =
                    "Unable to encode.";

            }

        };

    document
        .getElementById(
            "base64Decode"
        )
        .onclick = () => {

            try {

                result.value =
                    decodeURIComponent(
                        escape(
                            atob(
                                input.value
                            )
                        )
                    );

            } catch {

                result.value =
                    "Invalid Base64.";

            }

        };

}


/* =========================================================
   34. URL ENCODER
   ========================================================= */

function renderURLEncoder(container) {

    container.innerHTML = `

        <div class="tool-form">

            <textarea
                id="urlInput"
                rows="7"
                placeholder="Enter text or URL..."
            ></textarea>

            <div class="button-group">

                <button
                    class="primary-btn"
                    id="urlEncode"
                >
                    Encode
                </button>

                <button
                    class="secondary-btn"
                    id="urlDecode"
                >
                    Decode
                </button>

            </div>

            <textarea
                id="urlResult"
                rows="7"
                readonly
            ></textarea>

        </div>

    `;

    const input =
        document.getElementById(
            "urlInput"
        );

    const result =
        document.getElementById(
            "urlResult"
        );

    document
        .getElementById("urlEncode")
        .onclick = () => {

            result.value =
                encodeURIComponent(
                    input.value
                );

        };

    document
        .getElementById("urlDecode")
        .onclick = () => {

            try {

                result.value =
                    decodeURIComponent(
                        input.value
                    );

            } catch {

                result.value =
                    "Invalid encoded URL.";

            }

        };

}


/* =========================================================
   35. IMAGE RESIZER
   ========================================================= */

function renderImageResizer(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Select Image

                <input
                    id="resizeImage"
                    type="file"
                    accept="image/*"
                >

            </label>

            <label>
                Width (px)

                <input
                    id="resizeWidth"
                    type="number"
                    placeholder="1024"
                >

            </label>

            <label>
                Height (px)

                <input
                    id="resizeHeight"
                    type="number"
                    placeholder="Auto"
                >

            </label>

            <button
                class="primary-btn"
                id="resizeBtn"
            >
                Resize Image
            </button>

            <div
                class="result-box"
                id="resizeResult"
            >
                Select an image to begin.
            </div>

        </div>

    `;

    document
        .getElementById("resizeBtn")
        .onclick = () => {

            const file =
                document.getElementById(
                    "resizeImage"
                ).files[0];

            const width =
                Number(
                    document.getElementById(
                        "resizeWidth"
                    ).value
                );

            if (!file || !width) {

                showToolError(
                    "Select an image and enter width."
                );

                return;

            }

            const img =
                new Image();

            img.onload = () => {

                const height =
                    document.getElementById(
                        "resizeHeight"
                    ).value
                    ? Number(
                        document.getElementById(
                            "resizeHeight"
                        ).value
                    )
                    : Math.round(
                        img.height *
                        width /
                        img.width
                    );

                const canvas =
                    document.createElement(
                        "canvas"
                    );

                canvas.width =
                    width;

                canvas.height =
                    height;

                const ctx =
                    canvas.getContext("2d");

                ctx.drawImage(
                    img,
                    0,
                    0,
                    width,
                    height
                );

                canvas.toBlob(
                    blob => {

                        const url =
                            URL.createObjectURL(
                                blob
                            );

                        document
                            .getElementById(
                                "resizeResult"
                            )
                            .innerHTML = `

                                <strong>
                                    Image resized successfully.
                                </strong>

                                <br><br>

                                <a
                                    class="primary-btn"
                                    href="${url}"
                                    download="utilitybox-resized.jpg"
                                >
                                    Download Image
                                </a>

                            `;

                    },
                    "image/jpeg",
                    0.9
                );

            };

            img.src =
                URL.createObjectURL(file);

        };

}


/* =========================================================
   36. IMAGE TO PDF
   ========================================================= */

function renderImageToPDF(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Select Images

                <input
                    id="pdfImages"
                    type="file"
                    accept="image/*"
                    multiple
                >

            </label>

            <div
                class="result-box"
            >
                Multiple images can be selected.
                PDF conversion engine will be added
                in the next PDF module.
            </div>

            <button
                class="secondary-btn"
                onclick="showToast('PDF engine will be connected in the next update 🚀')"
            >
                Continue
            </button>

        </div>

    `;

}


/* =========================================================
   37. STUDY TIMER
   ========================================================= */

function renderStudyTimer(container) {

    container.innerHTML = `

        <div class="tool-form timer-tool">

            <div
                class="timer-display"
                id="timerDisplay"
            >
                25:00
            </div>

            <div class="button-group">

                <button
                    class="primary-btn"
                    id="timerStart"
                >
                    Start
                </button>

                <button
                    class="secondary-btn"
                    id="timerReset"
                >
                    Reset
                </button>

            </div>

        </div>

    `;

    let seconds = 25 * 60;

    let interval = null;

    const display =
        document.getElementById(
            "timerDisplay"
        );

    function update() {

        const min =
            Math.floor(
                seconds / 60
            )
                .toString()
                .padStart(2, "0");

        const sec =
            (
                seconds % 60
            )
                .toString()
                .padStart(2, "0");

        display.textContent =
            `${min}:${sec}`;

    }

    document
        .getElementById("timerStart")
        .onclick = () => {

            if (interval) return;

            interval =
                setInterval(
                    () => {

                        if (seconds <= 0) {

                            clearInterval(
                                interval
                            );

                            interval = null;

                            showToast(
                                "Study session completed 🎓"
                            );

                            return;

                        }

                        seconds--;

                        update();

                    },
                    1000
                );

        };

    document
        .getElementById("timerReset")
        .onclick = () => {

            clearInterval(interval);

            interval = null;

            seconds = 25 * 60;

            update();

        };

}


/* =========================================================
   38. EXAM COUNTDOWN
   ========================================================= */

function renderExamCountdown(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Exam Date

                <input
                    id="examDate"
                    type="date"
                >

            </label>

            <button
                class="primary-btn"
                id="examCalculate"
            >
                Calculate Countdown
            </button>

            <div
                class="result-box"
                id="examResult"
            >
                Select exam date.
            </div>

        </div>

    `;

    document
        .getElementById(
            "examCalculate"
        )
        .onclick = () => {

            const value =
                document.getElementById(
                    "examDate"
                ).value;

            if (!value) {

                showToolError(
                    "Please select an exam date."
                );

                return;

            }

            const target =
                new Date(value);

            const today =
                new Date();

            const diff =
                target - today;

            const days =
                Math.ceil(
                    diff /
                    (
                        1000 *
                        60 *
                        60 *
                        24
                    )
                );

            document
                .getElementById(
                    "examResult"
                )
                .textContent =
                days >= 0
                    ? `${days} days remaining`
                    : "This date has already passed.";

        };

}


/* =========================================================
   39. TOOL CLOSE
   ========================================================= */

function closeToolModal() {

    toolModal.classList.remove(
        "active"
    );

    toolModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

    toolModalBody.innerHTML = "";

}


modalClose?.addEventListener(
    "click",
    closeToolModal
);

modalOverlay?.addEventListener(
    "click",
    closeToolModal
);

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeToolModal();

        }

    }
);


/* =========================================================
   40. SEARCH EVENTS
   ========================================================= */

let searchTimer;

toolSearch?.addEventListener(
    "input",
    () => {

        clearTimeout(searchTimer);

        searchTimer =
            setTimeout(
                () => {

                    searchTools(
                        toolSearch.value
                    );

                },
                150
            );

    }
);


clearSearch?.addEventListener(
    "click",
    () => {

        toolSearch.value = "";

        currentTools = [...tools];

        showingAll = false;

        renderTools();

        toolSearch.focus();

    }
);


resetSearchBtn?.addEventListener(
    "click",
    () => {

        toolSearch.value = "";

        currentTools = [...tools];

        showingAll = false;

        renderTools();

    }
);


/* =========================================================
   41. QUICK SEARCH
   ========================================================= */

document
    .querySelectorAll(".quick-chip")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const search =
                    button.dataset.search;

                toolSearch.value =
                    search;

                searchTools(search);

                document
                    .getElementById("tools")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =========================================================
   42. VIEW ALL
   ========================================================= */

viewAllBtn?.addEventListener(
    "click",
    () => {

        showingAll =
            !showingAll;

        renderTools(
            currentTools
        );

    }
);


/* =========================================================
   43. THEME
   ========================================================= */

function setTheme(theme) {

    if (theme === "dark") {

        document.documentElement
            .classList.add("dark");

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }

        if (mobileThemeBtn) {
            mobileThemeBtn.textContent =
                "☀️ Light Mode";
        }

    } else {

        document.documentElement
            .classList.remove("dark");

        if (themeBtn) {
            themeBtn.textContent = "🌙";
        }

        if (mobileThemeBtn) {
            mobileThemeBtn.textContent =
                "🌙 Dark Mode";
        }

    }

    localStorage.setItem(
        "utilitybox_theme",
        theme
    );

}


function toggleTheme() {

    const dark =
        document.documentElement
            .classList.contains("dark");

    setTheme(
        dark
            ? "light"
            : "dark"
    );

    trackEvent(
        "theme_changed",
        {
            theme:
                dark
                    ? "light"
                    : "dark"
        }
    );

}


themeBtn?.addEventListener(
    "click",
    toggleTheme
);

mobileThemeBtn?.addEventListener(
    "click",
    toggleTheme
);


const savedTheme =
    localStorage.getItem(
        "utilitybox_theme"
    );

if (savedTheme) {

    setTheme(savedTheme);

} else if (
    window.matchMedia &&
    window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches
) {

    setTheme("dark");

}


/* =========================================================
   44. MOBILE MENU
   ========================================================= */

mobileMenuBtn?.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "active"
        );

    }
);


mobileNav
    ?.querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "active"
                );

            }
        );

    });


/* =========================================================
   45. HEADER SCROLL
   ========================================================= */

const header =
    document.getElementById(
        "header"
    );

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 30
        ) {

            header?.classList.add(
                "scrolled"
            );

        } else {

            header?.classList.remove(
                "scrolled"
            );

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   46. PWA INSTALL
   ========================================================= */

window.addEventListener(
    "beforeinstallprompt",
    event => {

        event.preventDefault();

        deferredInstallPrompt =
            event;

        if (installBtn) {

            installBtn.style.display =
                "inline-flex";

        }

    }
);

let deferredInstallPrompt = null;
let utilityBoxRegistration = null;

window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();

    deferredInstallPrompt = event;

    const installButtons = document.querySelectorAll(
        "[data-install-app]"
    );

    installButtons.forEach(button => {
        button.hidden = false;
    });
});

window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;

    const installButtons = document.querySelectorAll(
        "[data-install-app]"
    );

    installButtons.forEach(button => {
        button.hidden = true;
    });

    showToast("UtilityBox India installed successfully 📲");
});

async function installUtilityBox() {
    if (!deferredInstallPrompt) {
        showToast("Install option is not available right now.");
        return;
    }

    deferredInstallPrompt.prompt();

    try {
        await deferredInstallPrompt.userChoice;
    } catch (error) {
        console.warn("Install prompt error:", error);
    }

    deferredInstallPrompt = null;
}

async function registerUtilityBoxPWA() {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    try {
        const registration = await navigator.serviceWorker.register("./sw.js");

        utilityBoxRegistration = registration;

        console.log("UtilityBox PWA ready");

        if (registration.waiting) {
            showUpdateAvailable();
        }

        registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;

            if (!newWorker) return;

            newWorker.addEventListener("statechange", () => {
                if (
                    newWorker.state === "installed" &&
                    navigator.serviceWorker.controller
                ) {
                    showUpdateAvailable();
                }
            });
        });

    } catch (error) {
        console.error(
            "UtilityBox PWA registration failed:",
            error
        );
    }
}

function showUpdateAvailable() {
    const existing = document.getElementById(
        "utilityBoxUpdateNotice"
    );

    if (existing) return;

    const notice = document.createElement("div");

    notice.id = "utilityBoxUpdateNotice";

    notice.innerHTML = `
        <div class="pwa-update-content">
            <strong>New version available</strong>
            <span>Update UtilityBox India to get the latest improvements.</span>
        </div>

        <button type="button" id="pwaUpdateBtn">
            Update
        </button>

        <button
            type="button"
            id="pwaUpdateClose"
            aria-label="Close update notice"
        >
            ×
        </button>
    `;

    document.body.appendChild(notice);

    document
        .getElementById("pwaUpdateBtn")
        ?.addEventListener("click", () => {
            if (
                utilityBoxRegistration &&
                utilityBoxRegistration.waiting
            ) {
                utilityBoxRegistration.waiting.postMessage({
                    type: "SKIP_WAITING"
                });
            }

            window.location.reload();
        });

    document
        .getElementById("pwaUpdateClose")
        ?.addEventListener("click", () => {
            notice.remove();
        });
}

document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelectorAll("[data-install-app]")
        .forEach(button => {
            button.addEventListener(
                "click",
                installUtilityBox
            );
        });

    registerUtilityBoxPWA();
});

installBtn?.addEventListener(
    "click",
    async () => {

        if (!deferredInstallPrompt) {

            showToast(
                "Install option is not available yet."
            );

            return;

        }

        deferredInstallPrompt.prompt();

        const choice =
            await deferredInstallPrompt
                .userChoice;

        trackEvent(
            "pwa_install_choice",
            {
                outcome:
                    choice.outcome
            }
        );

        deferredInstallPrompt = null;

    }
);


/* =========================================================
   47. ANALYTICS
   SUPABASE + LOCAL FALLBACK
   ========================================================= */

const ANALYTICS_KEY = "utilitybox_analytics";

function getSupabaseClient() {
    return window.utilityBoxSupabase || null;
}


/* =========================================================
   LOCAL ANALYTICS
   ========================================================= */

function createEmptyAnalytics() {
    return {
        events: [],
        tools: {}
    };
}


function getAnalytics() {

    const empty =
        createEmptyAnalytics();

    try {

        const raw =
            localStorage.getItem(
                ANALYTICS_KEY
            );

        if (!raw) {
            return empty;
        }

        const parsed =
            JSON.parse(raw);

        if (
            !parsed ||
            typeof parsed !== "object"
        ) {
            return empty;
        }

        return {

            events:
                Array.isArray(parsed.events)
                    ? parsed.events
                    : [],

            tools:
                parsed.tools &&
                typeof parsed.tools === "object" &&
                !Array.isArray(parsed.tools)
                    ? parsed.tools
                    : {}

        };

    } catch (error) {

        console.warn(
            "UtilityBox analytics read failed:",
            error
        );

        return empty;
    }
}


function saveAnalytics(data) {

    try {

        localStorage.setItem(
            ANALYTICS_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.warn(
            "UtilityBox analytics save failed:",
            error
        );

    }
}


/* =========================================================
   SUPABASE AUTH USER
   ========================================================= */

async function getSupabaseUser() {

    if (!getSupabaseClient()) {
        return null;
    }

    try {

        const {
            data,
            error
        } =
            await window.utilityBoxSupabase?.auth.getUser()

        if (error) {
            return null;
        }

        return data?.user || null;

    } catch (error) {

        console.warn(
            "UtilityBox auth check failed:",
            error
        );

        return null;
    }
}


/* =========================================================
   SEND EVENT TO SUPABASE
   ========================================================= */

async function sendAnalyticsEvent(
    eventName,
    details = {}
) {

    if (!getSupabaseClient()) {
        return;
    }

    try {

        const user =
            await getSupabaseUser();

        /*
         * Current database policy allows
         * authenticated users to insert analytics.
         *
         * Anonymous visitors remain local-only
         * until we add a secure Edge Function.
         */

        if (!user) {
            return;
        }

        const {
            error
        } =
            await window.utilityBoxSupabase
    ?.from("analytics_events")
                .insert({

                    user_id: user.id,

                    event_name:
                        eventName,

                    tool_id:
                        details.toolId ||
                        null,

                    tool_name:
                        details.toolName ||
                        null,

                    category:
                        details.category ||
                        null,

                    search_query:
                        details.query ||
                        null,

                    metadata:
                        details || {}

                });

        if (error) {

            console.warn(
                "UtilityBox Supabase analytics failed:",
                error
            );

        }

    } catch (error) {

        console.warn(
            "UtilityBox Supabase analytics error:",
            error
        );

    }
}


/* =========================================================
   TRACK GENERAL EVENT
   ========================================================= */

function trackEvent(
    eventName,
    details = {}
) {

    try {

        const analytics =
            getAnalytics();

        if (
            !Array.isArray(
                analytics.events
            )
        ) {

            analytics.events = [];

        }

        analytics.events.push({

            event:
                eventName,

            details:
                details,

            timestamp:
                new Date().toISOString()

        });

        if (
            analytics.events.length >
            5000
        ) {

            analytics.events =
                analytics.events.slice(-5000);

        }

        saveAnalytics(
            analytics
        );

    } catch (error) {

        console.warn(
            "UtilityBox local event tracking failed:",
            error
        );

    }

    /*
     * Supabase upload is intentionally
     * non-blocking.
     */

    sendAnalyticsEvent(
        eventName,
        details
    );

}


/* =========================================================
   TRACK TOOL USAGE
   ========================================================= */

function trackToolUsage(tool) {

    if (
        !tool ||
        !tool.id
    ) {

        return;
    }

    const now =
        new Date().toISOString();

    try {

        const analytics =
            getAnalytics();

        if (
            !analytics.tools ||
            typeof analytics.tools !== "object" ||
            Array.isArray(analytics.tools)
        ) {

            analytics.tools = {};

        }

        if (
            !Array.isArray(
                analytics.events
            )
        ) {

            analytics.events = [];

        }

        if (
            !analytics.tools[
                tool.id
            ]
        ) {

            analytics.tools[
                tool.id
            ] = {

                name:
                    tool.name ||
                    tool.id,

                category:
                    tool.category ||
                    "Other",

                uses: 0,

                lastUsed:
                    null

            };

        }

        analytics.tools[
            tool.id
        ].uses =
            Number(
                analytics.tools[
                    tool.id
                ].uses
            ) || 0;

        analytics.tools[
            tool.id
        ].uses++;

        analytics.tools[
            tool.id
        ].lastUsed =
            now;

        analytics.events.push({

            event:
                "tool_used",

            details: {

                toolId:
                    tool.id,

                toolName:
                    tool.name ||
                    "Unknown Tool",

                category:
                    tool.category ||
                    "Other"

            },

            timestamp:
                now

        });

        if (
            analytics.events.length >
            5000
        ) {

            analytics.events =
                analytics.events.slice(-5000);

        }

        saveAnalytics(
            analytics
        );

    } catch (error) {

        console.warn(
            "UtilityBox local tool tracking failed:",
            error
        );

    }


    /*
     * Cloud analytics
     */

    sendAnalyticsEvent(
        "tool_used",
        {

            toolId:
                tool.id,

            toolName:
                tool.name ||
                "Unknown Tool",

            category:
                tool.category ||
                "Other"

        }
    );

}


/* =========================================================
   ANALYTICS SUMMARY
   ========================================================= */

function getAnalyticsSummary() {

    const analytics =
        getAnalytics();

    const tools =
        analytics.tools || {};

    const events =
        Array.isArray(
            analytics.events
        )
            ? analytics.events
            : [];

    const toolEntries =
        Object.entries(
            tools
        ).map(
            ([id, tool]) => ({

                id,

                name:
                    tool.name ||
                    id,

                category:
                    tool.category ||
                    "Other",

                uses:
                    Number(
                        tool.uses
                    ) || 0,

                lastUsed:
                    tool.lastUsed ||
                    null

            })
        );


    const totalUses =
        toolEntries.reduce(
            (
                total,
                tool
            ) => {

                return (
                    total +
                    (
                        Number(
                            tool.uses
                        ) || 0
                    )
                );

            },
            0
        );


    const searches =
        events.filter(
            event =>
                event.event ===
                "search"
        );


    const categories = {};


    toolEntries.forEach(
        tool => {

            const category =
                tool.category ||
                "Other";

            categories[
                category
            ] =
                (
                    categories[
                        category
                    ] || 0
                ) +
                (
                    Number(
                        tool.uses
                    ) || 0
                );

        }
    );


    const lastEvent =
        events.length
            ? events[
                events.length - 1
            ]
            : null;


    return {

        totalUses,

        totalSearches:
            searches.length,

        uniqueTools:
            toolEntries.length,

        categories:
            Object.keys(
                categories
            ).length,

        topTools:
            toolEntries
                .sort(
                    (a, b) =>
                        (
                            Number(
                                b.uses
                            ) || 0
                        ) -
                        (
                            Number(
                                a.uses
                            ) || 0
                        )
                )
                .slice(0, 10),

        categoryUsage:
            Object.entries(
                categories
            )
            .sort(
                (a, b) =>
                    b[1] - a[1]
            ),

        lastActivity:
            lastEvent?.timestamp ||
            null

    };

}


/* =========================================================
   SUPABASE CONNECTION STATUS
   ========================================================= */

if (window.utilityBoxSupabase) {

    console.log(
        "UtilityBox: Supabase client connected."
    );

} else {

    console.warn(
        "UtilityBox: Supabase client not found. Local analytics will continue."
    );

}

/* =========================================================
   48. TOAST
   ========================================================= */

let toastTimer;

function showToast(message) {

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================================
   49. TOOL ERROR
   ========================================================= */

function showToolError(message) {

    showToast(
        message
    );

}


/* =========================================================
   50. HELPERS
   ========================================================= */

function formatNumber(value) {

    if (
        !Number.isFinite(value)
    ) {

        return "0";

    }

    return Number(
        value.toFixed(2)
    ).toLocaleString(
        "en-IN"
    );

}


function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   51. INITIALIZE
   ========================================================= */

function initializeApp() {

    renderTools();

renderPopular();

renderCategories();

renderFavoriteTools();

renderQuickAccessSections();

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

    console.log(
        `UtilityBox India loaded with ${tools.length} tools.`
    );

}


initializeApp();
/* =========================================================
   UTILITYBOX INDIA
   ALL TOOLS PATCH
   ========================================================= */

/* ---------- LIBRARY LOADER ---------- */

function loadExternalScript(src) {
    return new Promise((resolve, reject) => {

        const existing = document.querySelector(
            `script[src="${src}"]`
        );

        if (existing) {
            resolve();
            return;
        }

        const script = document.createElement("script");

        script.src = src;
        script.onload = resolve;
        script.onerror = () =>
            reject(
                new Error(
                    "Unable to load required library."
                )
            );

        document.head.appendChild(script);
    });
}


/* =========================================================
   OPEN TOOL OVERRIDE
   ========================================================= */

function openTool(tool) {

    if (!tool) return;
try {

    trackToolUsage(tool);

    addToRecentTools(tool);

} catch (error) {

    console.warn(
        "Tool analytics error:",
        error
    );

}

    /*
       Dynamic tools open inside modal.
       Page tools open their own page.
       Coming-soon tools are also checked against
       available handlers so they can work.
    */

    if (
        tool.type === "page" &&
        tool.page
    ) {

        window.location.href =
            tool.page;

        return;
    }

    const availableDynamicTools = [

        "percentage",
        "age-calculator",
        "discount-calculator",
        "profit-loss",
        "simple-interest",
        "compound-interest",
        "emi-calculator",
        "gst-calculator",
        "cgpa-calculator",
        "attendance-calculator",
        "study-timer",
        "exam-countdown",
        "word-counter",
        "case-converter",
        "text-cleaner",
        "qr-generator",
        "text-to-qr",
        "wifi-qr",
        "unit-converter",
        "data-converter",
        "json-formatter",
        "base64",
        "url-encoder",
        "image-resizer",
        "image-compressor",
        "image-converter",
        "image-info",
        "image-to-pdf",
        "pdf-compressor",
        "pdf-to-image",
        "merge-pdf",
        "split-pdf",
        "passport-photo",
        "marks-percentage",
        "grade-calculator",
        "target-marks",
        "study-time",
        "study-schedule",
        "lcm-calculator",
        "hcf-calculator",
        "prime-checker",
        "factorial-calculator",
        "area-calculator",
        "volume-calculator",
        "number-system",
        "ratio-proportion"

    ];

    if (
        tool.type === "dynamic" ||
        availableDynamicTools.includes(tool.id)
    ) {

        try {

            openDynamicTool(tool);

        } catch (error) {

            console.error(
                "Tool opening error:",
                error
            );

            showToolError(
                "This tool could not be opened."
            );
        }

        return;
    }

    showToast(
        `${tool.name} is coming soon 🚀`
    );
}


/* =========================================================
   TOOL ROUTER OVERRIDE
   ========================================================= */

function loadToolInterface(
    toolId,
    container
) {

    const handlers = {

        "percentage":
            renderPercentageTool,

        "age-calculator":
            renderAgeCalculator,

        "discount-calculator":
            renderDiscountCalculator,

        "profit-loss":
            renderProfitLoss,

        "simple-interest":
            renderSimpleInterest,

        "compound-interest":
            renderCompoundInterest,

        "emi-calculator":
            renderEMI,

        "gst-calculator":
            renderGST,

        "cgpa-calculator":
            renderCGPA,

        "attendance-calculator":
            renderAttendance,

        "study-timer":
            renderStudyTimer,

        "exam-countdown":
            renderExamCountdown,

        "word-counter":
            renderWordCounter,

        "case-converter":
            renderCaseConverter,

        "text-cleaner":
            renderTextCleaner,

        "qr-generator":
            renderQRGenerator,

        "text-to-qr":
            renderQRGenerator,

        "wifi-qr":
            renderWifiQR,

        "unit-converter":
            renderUnitConverter,

        "data-converter":
            renderDataConverter,

        "json-formatter":
            renderJSONFormatter,

        "base64":
            renderBase64,

        "url-encoder":
            renderURLEncoder,

        "image-resizer":
            renderImageResizer,

        "image-compressor": 
            renderImageCompressor,

        "image-converter":
            renderImageConverter,

        "image-info":
            renderImageInfo,

        "image-to-pdf":
            renderImageToPDF,

        "pdf-compressor":
            renderPDFCompressor,

        "pdf-to-image":
            renderPDFToImage,

        "merge-pdf":
            renderMergePDF,

        "split-pdf":
            renderSplitPDF,

        "passport-photo":
            renderPassportPhoto,

"lcm-calculator":
    renderLCMCalculator,

"hcf-calculator":
    renderHCFCalculator,

"prime-checker":
    renderPrimeChecker,

"factorial-calculator":
    renderFactorialCalculator,

"area-calculator":
    renderAreaCalculator,

"volume-calculator":
    renderVolumeCalculator,

"number-system":
    renderNumberSystem,

"ratio-proportion":
    renderRatioProportion,

"date-difference":
    renderDateDifference,

        "marks-percentage":
            renderMarksPercentage,

        "grade-calculator":
            renderGradeCalculator,

        "target-marks":
            renderTargetMarks,

        "study-time":
            renderStudyTime,

        "study-schedule":
            renderStudySchedule,    

        "date-difference":
            renderDateDifference,

        "average-calculator":
            renderAverageCalculator,

        "ratio-calculator":
            renderRatioCalculator,

        "percentage-change":
            renderPercentageChange,

        "sip-calculator":
            renderSIPCalculator,

        "loan-calculator":
            renderLoanCalculator,

        "salary-calculator":
            renderSalaryCalculator,

        "number-to-words":
            renderNumberToWords,

        "password-generator":
            renderPasswordGenerator,

        "random-number":
            renderRandomNumber,

        "random-choice":
            renderRandomChoice,

        "lucky-number":
            renderLuckyNumber,

    };

    const handler =
        handlers[toolId];

    if (handler) {

        try {

            handler(container);

        } catch (error) {

            console.error(
                `Error rendering ${toolId}:`,
                error
            );

            container.innerHTML = `
                <div class="empty-state">

                    <div class="empty-icon">
                        ⚠️
                    </div>

                    <h3>
                        Tool Error
                    </h3>

                    <p>
                        Something went wrong while
                        loading this tool.
                    </p>

                    <button
                        class="secondary-btn"
                        onclick="location.reload()"
                    >
                        Reload
                    </button>

                </div>
            `;
        }

        return;
    }

    container.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                🚧
            </div>

            <h3>
                Tool under development
            </h3>

            <p>
                This tool will be available soon.
            </p>

        </div>

    `;
}


/* =========================================================
   IMAGE → PDF — UPDATED
   ========================================================= */

async function renderImageToPDF(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Select Images
                <input
                    id="imagePdfFiles"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                >
            </label>

            <label>
                Page Size
                <select id="imagePdfPageSize">
                    <option value="a4">A4</option>
                    <option value="letter">Letter</option>
                    <option value="fit">Fit to Image</option>
                </select>
            </label>

            <label>
                Orientation
                <select id="imagePdfOrientation">
                    <option value="auto">Auto</option>
                    <option value="portrait">Portrait</option>
                    <option value="landscape">Landscape</option>
                </select>
            </label>

            <button
                class="primary-btn"
                id="imagePdfCreate"
            >
                📄 Create PDF
            </button>

            <div
                class="result-box"
                id="imagePdfResult"
            >
                Select one or more images.
            </div>

        </div>
    `;

    const button =
        document.getElementById("imagePdfCreate");

    button.onclick = async () => {

        const input =
            document.getElementById("imagePdfFiles");

        const result =
            document.getElementById("imagePdfResult");

        const pageSize =
            document.getElementById(
                "imagePdfPageSize"
            ).value;

        const orientation =
            document.getElementById(
                "imagePdfOrientation"
            ).value;

        const files =
            Array.from(input.files || []);

        if (!files.length) {
            result.textContent =
                "Please select at least one image.";
            return;
        }

        try {

            button.disabled = true;
            button.textContent = "Creating PDF...";

            result.textContent =
                "Processing images...";

            await loadExternalScript(
                "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
            );

            if (!window.jspdf) {
                throw new Error(
                    "PDF library could not be loaded."
                );
            }

            const {
                jsPDF
            } = window.jspdf;

            let pdf = null;

            for (
                let i = 0;
                i < files.length;
                i++
            ) {

                const dataURL =
                    await fileToDataURL(files[i]);

                const dimensions =
                    await getImageDimensions(
                        dataURL
                    );

                let orientationToUse =
                    orientation;

                if (orientationToUse === "auto") {

                    orientationToUse =
                        dimensions.width >=
                        dimensions.height
                            ? "landscape"
                            : "portrait";
                }

                let format = "a4";

                if (pageSize === "letter") {
                    format = "letter";
                }

                if (pageSize === "fit") {

                    const widthMM =
                        dimensions.width *
                        0.264583;

                    const heightMM =
                        dimensions.height *
                        0.264583;

                    pdf = new jsPDF({
                        orientation:
                            orientationToUse,
                        unit: "mm",
                        format: [
                            widthMM,
                            heightMM
                        ]
                    });

                } else {

                    if (!pdf) {

                        pdf = new jsPDF({
                            orientation:
                                orientationToUse,
                            unit: "mm",
                            format
                        });

                    } else {

                        pdf.addPage(
                            format,
                            orientationToUse
                        );
                    }
                }

                const pageWidth =
                    pdf.internal.pageSize.getWidth();

                const pageHeight =
                    pdf.internal.pageSize.getHeight();

                let imageWidth;
                let imageHeight;

                if (pageSize === "fit") {

                    imageWidth =
                        pageWidth;

                    imageHeight =
                        pageHeight;

                } else {

                    const margin = 8;

                    const maxWidth =
                        pageWidth -
                        margin * 2;

                    const maxHeight =
                        pageHeight -
                        margin * 2;

                    const scale =
                        Math.min(
                            maxWidth /
                                dimensions.width,
                            maxHeight /
                                dimensions.height
                        );

                    imageWidth =
                        dimensions.width *
                        scale;

                    imageHeight =
                        dimensions.height *
                        scale;
                }

                const x =
                    (pageWidth -
                        imageWidth) / 2;

                const y =
                    (pageHeight -
                        imageHeight) / 2;

                let imageFormat = "JPEG";

                if (
                    files[i].type ===
                    "image/png"
                ) {
                    imageFormat = "PNG";
                }

                pdf.addImage(
                    dataURL,
                    imageFormat,
                    x,
                    y,
                    imageWidth,
                    imageHeight,
                    undefined,
                    "FAST"
                );

                result.textContent =
                    `Processing image ${i + 1} of ${files.length}...`;
            }

            const filename =
                `utilitybox-images-${Date.now()}.pdf`;

            pdf.save(filename);

            result.innerHTML = `
                <strong>✅ PDF Created Successfully</strong>
                <br><br>
                ${files.length} image(s) converted.
                <br>
                File: ${escapeHTML(filename)}
            `;

        } catch (error) {

            console.error(
                "Image to PDF error:",
                error
            );

            result.textContent =
                "Unable to create PDF. Please try again.";

        } finally {

            button.disabled = false;
            button.textContent =
                "📄 Create PDF";
        }
    };
}

/* =========================================================
   PDF LIBRARY
   ========================================================= */

async function loadPDFLib() {

    await loadExternalScript(
        "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"
    );

    return window.PDFLib;
}


/* =========================================================
   PDF COMPRESSOR — UPDATED
   ========================================================= */

async function renderPDFCompressor(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Select PDF
                <input
                    id="pdfCompressFile"
                    type="file"
                    accept="application/pdf"
                >
            </label>

            <label>
                Compression Level
                <select id="pdfCompressionLevel">
                    <option value="low">
                        Low — Better Quality
                    </option>

                    <option value="medium" selected>
                        Medium — Recommended
                    </option>

                    <option value="high">
                        High — Smaller File
                    </option>
                </select>
            </label>

            <button
                class="primary-btn"
                id="pdfCompressButton"
            >
                🗜️ Compress PDF
            </button>

            <div
                class="result-box"
                id="pdfCompressResult"
            >
                Select a PDF file.
            </div>

        </div>
    `;

    const button =
        document.getElementById(
            "pdfCompressButton"
        );

    button.onclick = async () => {

        const input =
            document.getElementById(
                "pdfCompressFile"
            );

        const result =
            document.getElementById(
                "pdfCompressResult"
            );

        const level =
            document.getElementById(
                "pdfCompressionLevel"
            ).value;

        const file =
            input.files?.[0];

        if (!file) {

            result.textContent =
                "Please select a PDF first.";

            return;
        }

        if (
            file.type !==
            "application/pdf"
        ) {

            result.textContent =
                "Please select a valid PDF file.";

            return;
        }

        try {

            button.disabled = true;
            button.textContent =
                "Compressing...";

            result.textContent =
                "Processing PDF...";

            await loadExternalScript(
                "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"
            );

            if (!window.PDFLib) {
                throw new Error(
                    "PDF library unavailable."
                );
            }

            const {
                PDFDocument
            } = window.PDFLib;

            const bytes =
                await file.arrayBuffer();

            const pdf =
                await PDFDocument.load(
                    bytes
                );

            /*
             * pdf-lib can optimize/rewrite the PDF,
             * but it cannot perform true image
             * re-encoding like a server-side compressor.
             */

            let quality;

            if (level === "low") {
                quality = 1;
            } else if (level === "high") {
                quality = 0.5;
            } else {
                quality = 0.75;
            }

            /*
             * Copying pages into a fresh document
             * removes some unnecessary document
             * structure while preserving content.
             */

            const compressed =
                await PDFDocument.create();

            const pages =
                await compressed.copyPages(
                    pdf,
                    pdf.getPageIndices()
                );

            pages.forEach(page => {
                compressed.addPage(page);
            });

            const output =
                await compressed.save({
                    useObjectStreams: true,
                    addDefaultPage: false,
                    objectsPerTick:
                        level === "high"
                            ? 20
                            : 50
                });

            const blob =
                new Blob(
                    [output],
                    {
                        type:
                            "application/pdf"
                    }
                );

            const url =
                URL.createObjectURL(
                    blob
                );

            const a =
                document.createElement("a");

            a.href = url;

            a.download =
                `utilitybox-compressed-${Date.now()}.pdf`;

            document.body.appendChild(a);

            a.click();

            a.remove();

            setTimeout(
                () =>
                    URL.revokeObjectURL(url),
                1000
            );

            const oldSize =
                file.size / 1024 / 1024;

            const newSize =
                blob.size / 1024 / 1024;

            const saved =
                oldSize > 0
                    ? (
                        (
                            oldSize -
                            newSize
                        ) /
                        oldSize
                    ) * 100
                    : 0;

            result.innerHTML = `
                <strong>✅ PDF Processed</strong>
                <br><br>
                Original:
                ${oldSize.toFixed(2)} MB
                <br>
                New:
                ${newSize.toFixed(2)} MB
                <br>
                Size change:
                ${saved >= 0
                    ? saved.toFixed(1) + "% smaller"
                    : Math.abs(saved).toFixed(1) + "% larger"}
            `;

        } catch (error) {

            console.error(
                "PDF compressor error:",
                error
            );

            result.textContent =
                "This PDF could not be processed. Try another PDF.";

        } finally {

            button.disabled = false;

            button.textContent =
                "🗜️ Compress PDF";
        }
    };
}

/* =========================================================
   PDF → IMAGE — UPDATED
   ========================================================= */

async function renderPDFToImage(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Select PDF
                <input
                    id="pdfImageFile"
                    type="file"
                    accept="application/pdf"
                >
            </label>

            <label>
                Image Format
                <select id="pdfImageFormat">
                    <option value="png">
                        PNG — Better Quality
                    </option>

                    <option value="jpeg">
                        JPG — Smaller Size
                    </option>
                </select>
            </label>

            <label>
                Quality
                <select id="pdfImageScale">
                    <option value="1">
                        Normal
                    </option>

                    <option value="1.5" selected>
                        High
                    </option>

                    <option value="2">
                        Very High
                    </option>
                </select>
            </label>

            <button
                class="primary-btn"
                id="pdfImageConvert"
            >
                🖼️ Convert PDF
            </button>

            <div
                class="result-box"
                id="pdfImageResult"
            >
                Select a PDF file.
            </div>

        </div>
    `;

    const button =
        document.getElementById(
            "pdfImageConvert"
        );

    button.onclick = async () => {

        const file =
            document.getElementById(
                "pdfImageFile"
            ).files?.[0];

        const format =
            document.getElementById(
                "pdfImageFormat"
            ).value;

        const scale =
            Number(
                document.getElementById(
                    "pdfImageScale"
                ).value
            );

        const result =
            document.getElementById(
                "pdfImageResult"
            );

        if (!file) {

            result.textContent =
                "Please select a PDF first.";

            return;
        }

        try {

            button.disabled = true;
            button.textContent =
                "Converting...";

            result.textContent =
                "Loading PDF...";

            await loadExternalScript(
                "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
            );

            if (!window.pdfjsLib) {
                throw new Error(
                    "PDF.js could not be loaded."
                );
            }

            window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

            const buffer =
                await file.arrayBuffer();

            const pdf =
                await window.pdfjsLib.getDocument({
                    data: buffer
                }).promise;

            for (
                let pageNumber = 1;
                pageNumber <= pdf.numPages;
                pageNumber++
            ) {

                result.textContent =
                    `Converting page ${pageNumber} of ${pdf.numPages}...`;

                const page =
                    await pdf.getPage(
                        pageNumber
                    );

                const viewport =
                    page.getViewport({
                        scale
                    });

                const canvas =
                    document.createElement(
                        "canvas"
                    );

                const context =
                    canvas.getContext(
                        "2d"
                    );

                canvas.width =
                    Math.ceil(
                        viewport.width
                    );

                canvas.height =
                    Math.ceil(
                        viewport.height
                    );

                await page.render({
                    canvasContext:
                        context,
                    viewport
                }).promise;

                const mime =
                    format === "jpeg"
                        ? "image/jpeg"
                        : "image/png";

                const quality =
                    format === "jpeg"
                        ? 0.92
                        : undefined;

                const dataURL =
                    canvas.toDataURL(
                        mime,
                        quality
                    );

                const a =
                    document.createElement(
                        "a"
                    );

                a.href = dataURL;

                a.download =
                    `utilitybox-page-${pageNumber}.${format === "jpeg" ? "jpg" : "png"}`;

                document.body.appendChild(a);

                a.click();

                a.remove();

                /*
                 * Small pause helps prevent browsers
                 * from blocking multiple downloads.
                 */

                await new Promise(
                    resolve =>
                        setTimeout(
                            resolve,
                            150
                        )
                );
            }

            result.innerHTML = `
                <strong>✅ Conversion Complete</strong>
                <br><br>
                ${pdf.numPages} page(s) converted.
                <br>
                Check your Downloads folder.
            `;

        } catch (error) {

            console.error(
                "PDF to image error:",
                error
            );

            result.textContent =
                "Unable to convert this PDF.";

        } finally {

            button.disabled = false;

            button.textContent =
                "🖼️ Convert PDF";
        }
    };
}

/* =========================================================
   MERGE PDF
   ========================================================= */

async function renderMergePDF(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Select PDF files

                <input
                    id="mergePdfFiles"
                    type="file"
                    accept="application/pdf"
                    multiple
                >
            </label>

            <button
                class="primary-btn"
                id="mergePdfBtn"
            >
                Merge PDFs
            </button>

            <div
                class="result-box"
                id="mergePdfResult"
            >
                Select two or more PDF files.
            </div>

        </div>

    `;

    document
        .getElementById("mergePdfBtn")
        .addEventListener(
            "click",
            async () => {

                const files =
                    Array.from(
                        document.getElementById(
                            "mergePdfFiles"
                        ).files
                    );

                const result =
                    document.getElementById(
                        "mergePdfResult"
                    );

                if (files.length < 2) {

                    result.textContent =
                        "Please select at least 2 PDFs.";

                    return;
                }

                try {

                    const {
                        PDFDocument
                    } = await loadPDFLib();

                    const merged =
                        await PDFDocument.create();

                    for (const file of files) {

                        const bytes =
                            await file.arrayBuffer();

                        const source =
                            await PDFDocument.load(
                                bytes
                            );

                        const pages =
                            await merged.copyPages(
                                source,
                                source.getPageIndices()
                            );

                        pages.forEach(
                            page =>
                                merged.addPage(page)
                        );
                    }

                    const output =
                        await merged.save();

                    downloadBlob(
                        new Blob(
                            [output],
                            {
                                type:
                                    "application/pdf"
                            }
                        ),
                        "utilitybox-merged.pdf"
                    );

                    result.textContent =
                        "PDFs merged successfully.";

                } catch (error) {

                    console.error(error);

                    result.textContent =
                        "Unable to merge PDFs.";

                }
            }
        );
}


/* =========================================================
   SPLIT PDF
   ========================================================= */

async function renderSplitPDF(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Select PDF

                <input
                    id="splitPdfFile"
                    type="file"
                    accept="application/pdf"
                >
            </label>

            <label>
                Page Number

                <input
                    id="splitPdfPage"
                    type="number"
                    min="1"
                    placeholder="e.g. 1"
                >
            </label>

            <button
                class="primary-btn"
                id="splitPdfBtn"
            >
                Extract Page
            </button>

            <div
                class="result-box"
                id="splitPdfResult"
            >
                Select a PDF and enter a page number.
            </div>

        </div>

    `;

    document
        .getElementById("splitPdfBtn")
        .addEventListener(
            "click",
            async () => {

                const file =
                    document.getElementById(
                        "splitPdfFile"
                    ).files[0];

                const pageNumber =
                    Number(
                        document.getElementById(
                            "splitPdfPage"
                        ).value
                    );

                const result =
                    document.getElementById(
                        "splitPdfResult"
                    );

                if (!file) {

                    result.textContent =
                        "Please select a PDF.";

                    return;
                }

                if (!pageNumber || pageNumber < 1) {

                    result.textContent =
                        "Enter a valid page number.";

                    return;
                }

                try {

                    const {
                        PDFDocument
                    } = await loadPDFLib();

                    const sourceBytes =
                        await file.arrayBuffer();

                    const source =
                        await PDFDocument.load(
                            sourceBytes
                        );

                    if (
                        pageNumber >
                        source.getPageCount()
                    ) {

                        result.textContent =
                            "Page number is greater than total pages.";

                        return;
                    }

                    const output =
                        await PDFDocument.create();

                    const [
                        page
                    ] =
                        await output.copyPages(
                            source,
                            [pageNumber - 1]
                        );

                    output.addPage(page);

                    const bytes =
                        await output.save();

                    downloadBlob(
                        new Blob(
                            [bytes],
                            {
                                type:
                                    "application/pdf"
                            }
                        ),
                        `utilitybox-page-${pageNumber}.pdf`
                    );

                    result.textContent =
                        "Page extracted successfully.";

                } catch (error) {

                    console.error(error);

                    result.textContent =
                        "Unable to split PDF.";

                }
            }
        );
}


/* =========================================================
   PASSPORT PHOTO
   ========================================================= */

function renderPassportPhoto(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Select Photo

                <input
                    id="passportInput"
                    type="file"
                    accept="image/*"
                >
            </label>

            <label>
                Photo Size

                <select id="passportSize">

                    <option value="413x531">
                        35 × 45 mm
                    </option>

                    <option value="295x413">
                        25 × 35 mm
                    </option>

                    <option value="600x600">
                        Square
                    </option>

                </select>
            </label>

            <button
                class="primary-btn"
                id="passportCreate"
            >
                Create Photo
            </button>

            <div
                class="result-box"
                id="passportResult"
            >
                Select a photo.
            </div>

            <canvas
                id="passportCanvas"
                style="
                    max-width:100%;
                    display:none;
                    margin-top:15px;
                "
            ></canvas>

        </div>

    `;

    document
        .getElementById("passportCreate")
        .addEventListener(
            "click",
            () => {

                const file =
                    document.getElementById(
                        "passportInput"
                    ).files[0];

                const result =
                    document.getElementById(
                        "passportResult"
                    );

                const canvas =
                    document.getElementById(
                        "passportCanvas"
                    );

                if (!file) {

                    result.textContent =
                        "Please select a photo.";

                    return;
                }

                const image =
                    new Image();

                image.onload = () => {

                    const [
                        width,
                        height
                    ] =
                        document
                            .getElementById(
                                "passportSize"
                            )
                            .value
                            .split("x")
                            .map(Number);

                    canvas.width =
                        width;

                    canvas.height =
                        height;

                    const ctx =
                        canvas.getContext(
                            "2d"
                        );

                    /*
                       White background.
                       The tool does not alter facial
                       features.
                    */

                    ctx.fillStyle =
                        "#ffffff";

                    ctx.fillRect(
                        0,
                        0,
                        width,
                        height
                    );

                    const ratio =
                        Math.min(
                            width /
                                image.width,
                            height /
                                image.height
                        );

                    const drawWidth =
                        image.width *
                        ratio;

                    const drawHeight =
                        image.height *
                        ratio;

                    const x =
                        (width -
                            drawWidth) /
                        2;

                    const y =
                        (height -
                            drawHeight) /
                        2;

                    ctx.drawImage(
                        image,
                        x,
                        y,
                        drawWidth,
                        drawHeight
                    );

                    canvas.style.display =
                        "block";

                    const download =
                        document.createElement(
                            "a"
                        );

                    download.href =
                        canvas.toDataURL(
                            "image/jpeg",
                            0.95
                        );

                    download.download =
                        "utilitybox-passport-photo.jpg";

                    download.textContent =
                        "Download Photo";

                    download.className =
                        "secondary-btn";

                    download.style.display =
                        "inline-flex";

                    download.style.marginTop =
                        "12px";

                    result.innerHTML = "";

                    result.appendChild(
                        download
                    );
                };

                image.onerror = () => {

                    result.textContent =
                        "Unable to read this image.";

                };

                image.src =
                    URL.createObjectURL(
                        file
                    );
            }
        );
}


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

function fileToDataURL(file) {

    return new Promise(
        (resolve, reject) => {

            const reader =
                new FileReader();

            reader.onload =
                () => resolve(
                    reader.result
                );

            reader.onerror =
                reject;

            reader.readAsDataURL(
                file
            );
        }
    );
}


function getImageDimensions(src) {

    return new Promise(
        (resolve, reject) => {

            const image =
                new Image();

            image.onload = () => {

                resolve({
                    width:
                        image.naturalWidth,
                    height:
                        image.naturalHeight
                });

            };

            image.onerror =
                reject;

            image.src =
                src;
        }
    );
}


function downloadBlob(
    blob,
    filename
) {

    const url =
        URL.createObjectURL(
            blob
        );

    const link =
        document.createElement(
            "a"
        );

    link.href =
        url;

    link.download =
        filename;

    document.body.appendChild(
        link
    );

    link.click();

    link.remove();

    setTimeout(
        () => {
            URL.revokeObjectURL(
                url
            );
        },
        1000
    );
}


/* =========================================================
   FINAL MESSAGE
   ========================================================= */

console.log(
    "UtilityBox India: All available tools loaded."
);
/* =========================================================
   PHASE 2 — AGE CALCULATOR
========================================================= */

function renderAgeCalculator(container) {
    container.innerHTML = `
        <div class="tool-form">

            <label>
                Date of Birth
                <input type="date" id="ageDob">
            </label>

            <button class="primary-btn" id="calculateAgeBtn">
                Calculate Age
            </button>

            <button class="secondary-btn" id="resetAgeBtn">
                Reset
            </button>

            <div class="result-box" id="ageResult">
                Enter your date of birth to calculate your age.
            </div>

        </div>
    `;

    document
        .getElementById("calculateAgeBtn")
        .addEventListener("click", () => {

            const dobValue =
                document.getElementById("ageDob").value;

            const result =
                document.getElementById("ageResult");

            if (!dobValue) {
                result.textContent =
                    "Please select your date of birth.";
                return;
            }

            const dob = new Date(dobValue + "T00:00:00");
            const today = new Date();

            if (dob > today) {
                result.textContent =
                    "Date of birth cannot be in the future.";
                return;
            }

            let years =
                today.getFullYear() -
                dob.getFullYear();

            let months =
                today.getMonth() -
                dob.getMonth();

            let days =
                today.getDate() -
                dob.getDate();

            if (days < 0) {
                months--;

                const previousMonth =
                    new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        0
                    );

                days +=
                    previousMonth.getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            result.innerHTML = `
                <strong>Your Age</strong><br><br>
                ${years} Years,
                ${months} Months,
                ${days} Days
            `;
        });

    document
        .getElementById("resetAgeBtn")
        .addEventListener("click", () => {

            document.getElementById("ageDob").value = "";

            document.getElementById("ageResult").textContent =
                "Enter your date of birth to calculate your age.";
        });
}


/* =========================================================
   DATE DIFFERENCE CALCULATOR
========================================================= */

function renderDateDifference(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Start Date
                <input type="date" id="dateStart">
            </label>

            <label>
                End Date
                <input type="date" id="dateEnd">
            </label>

            <button class="primary-btn" id="calculateDateDifference">
                Calculate Difference
            </button>

            <button class="secondary-btn" id="resetDateDifference">
                Reset
            </button>

            <div class="result-box" id="dateDifferenceResult">
                Select both dates to calculate the difference.
            </div>

        </div>
    `;

    document
        .getElementById("calculateDateDifference")
        .addEventListener("click", () => {

            const startValue =
                document.getElementById("dateStart").value;

            const endValue =
                document.getElementById("dateEnd").value;

            const result =
                document.getElementById("dateDifferenceResult");

            if (!startValue || !endValue) {
                result.textContent =
                    "Please select both dates.";
                return;
            }

            const start =
                new Date(startValue + "T00:00:00");

            const end =
                new Date(endValue + "T00:00:00");

            if (end < start) {
                result.textContent =
                    "End date must be after the start date.";
                return;
            }

            const difference =
                end.getTime() - start.getTime();

            const totalDays =
                Math.floor(
                    difference /
                    (1000 * 60 * 60 * 24)
                );

            const totalWeeks =
                Math.floor(totalDays / 7);

            const remainingDays =
                totalDays % 7;

            result.innerHTML = `
                <strong>Date Difference</strong><br><br>

                ${totalDays.toLocaleString()} Days<br>

                ${totalWeeks.toLocaleString()} Weeks
                ${remainingDays > 0
                    ? ` + ${remainingDays} Days`
                    : ""}
            `;
        });

    document
        .getElementById("resetDateDifference")
        .addEventListener("click", () => {

            document.getElementById("dateStart").value = "";
            document.getElementById("dateEnd").value = "";

            document.getElementById("dateDifferenceResult").textContent =
                "Select both dates to calculate the difference.";
        });
}


/* =========================================================
   AVERAGE CALCULATOR
========================================================= */

function renderAverageCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Enter Numbers
                <textarea
                    id="averageNumbers"
                    rows="5"
                    placeholder="Example: 10, 20, 30, 40, 50"
                ></textarea>
            </label>

            <button class="primary-btn" id="calculateAverage">
                Calculate Average
            </button>

            <button class="secondary-btn" id="resetAverage">
                Reset
            </button>

            <div class="result-box" id="averageResult">
                Enter numbers separated by commas, spaces or new lines.
            </div>

        </div>
    `;

    document
        .getElementById("calculateAverage")
        .addEventListener("click", () => {

            const input =
                document.getElementById("averageNumbers").value.trim();

            const result =
                document.getElementById("averageResult");

            if (!input) {
                result.textContent =
                    "Please enter some numbers.";
                return;
            }

            const numbers =
                input
                    .split(/[\s,]+/)
                    .map(Number)
                    .filter(number => Number.isFinite(number));

            if (!numbers.length) {
                result.textContent =
                    "Please enter valid numbers.";
                return;
            }

            const sum =
                numbers.reduce(
                    (total, number) =>
                        total + number,
                    0
                );

            const average =
                sum / numbers.length;

            result.innerHTML = `
                <strong>Average Result</strong><br><br>

                Count: ${numbers.length}<br>

                Sum: ${sum.toLocaleString()}<br>

                Average:
                <strong>
                    ${average.toLocaleString(
                        undefined,
                        {
                            maximumFractionDigits: 6
                        }
                    )}
                </strong>
            `;
        });

    document
        .getElementById("resetAverage")
        .addEventListener("click", () => {

            document.getElementById("averageNumbers").value = "";

            document.getElementById("averageResult").textContent =
                "Enter numbers separated by commas, spaces or new lines.";
        });
}
function renderRatioCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                First Value
                <input
                    type="number"
                    id="ratioA"
                    placeholder="Example: 20"
                >
            </label>

            <label>
                Second Value
                <input
                    type="number"
                    id="ratioB"
                    placeholder="Example: 30"
                >
            </label>

            <button
                class="primary-btn"
                id="calculateRatio"
            >
                Calculate Ratio
            </button>

            <button
                class="secondary-btn"
                id="resetRatio"
            >
                Reset
            </button>

            <div
                class="result-box"
                id="ratioResult"
            >
                Enter two values to calculate the ratio.
            </div>

        </div>
    `;

    document
        .getElementById("calculateRatio")
        .addEventListener("click", () => {

            const a = Number(
                document.getElementById("ratioA").value
            );

            const b = Number(
                document.getElementById("ratioB").value
            );

            const result =
                document.getElementById("ratioResult");

            if (!Number.isFinite(a) || !Number.isFinite(b)) {
                result.textContent =
                    "Please enter both values.";
                return;
            }

            if (a === 0 && b === 0) {
                result.textContent =
                    "Both values cannot be zero.";
                return;
            }

            if (b === 0) {
                result.textContent =
                    "Second value cannot be zero.";
                return;
            }

            const gcd = (x, y) => {
                x = Math.abs(x);
                y = Math.abs(y);

                while (y !== 0) {
                    const temp = y;
                    y = x % y;
                    x = temp;
                }

                return x;
            };

            // Support decimals by scaling them
            const decimalPlaces = Math.max(
                (a.toString().split(".")[1] || "").length,
                (b.toString().split(".")[1] || "").length
            );

            const multiplier =
                Math.pow(10, decimalPlaces);

            const scaledA =
                Math.round(a * multiplier);

            const scaledB =
                Math.round(b * multiplier);

            const divisor =
                gcd(scaledA, scaledB);

            const simpleA =
                scaledA / divisor;

            const simpleB =
                scaledB / divisor;

            result.innerHTML = `
                <strong>Ratio Result</strong><br><br>

                Original Ratio:
                ${a.toLocaleString()} : ${b.toLocaleString()}<br><br>

                Simplified Ratio:
                <strong>
                    ${simpleA.toLocaleString()} : ${simpleB.toLocaleString()}
                </strong>
            `;
        });

    document
        .getElementById("resetRatio")
        .addEventListener("click", () => {

            document.getElementById("ratioA").value = "";
            document.getElementById("ratioB").value = "";

            document.getElementById("ratioResult").textContent =
                "Enter two values to calculate the ratio.";
        });
}
/* =========================================================
   PHASE 2 — ADDITIONAL CALCULATOR & UTILITY TOOLS
   ========================================================= */


/* =========================================================
   PERCENTAGE CHANGE
   ========================================================= */

function renderPercentageChange(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Original Value
                <input
                    type="number"
                    id="percentageChangeOld"
                    placeholder="Example: 100"
                >
            </label>

            <label>
                New Value
                <input
                    type="number"
                    id="percentageChangeNew"
                    placeholder="Example: 125"
                >
            </label>

            <button
                class="primary-btn"
                id="calculatePercentageChange"
            >
                Calculate Change
            </button>

            <button
                class="secondary-btn"
                id="resetPercentageChange"
            >
                Reset
            </button>

            <div
                class="result-box"
                id="percentageChangeResult"
            >
                Enter the original and new values.
            </div>

        </div>
    `;

    document
        .getElementById("calculatePercentageChange")
        .addEventListener("click", () => {

            const oldValue =
                Number(
                    document.getElementById(
                        "percentageChangeOld"
                    ).value
                );

            const newValue =
                Number(
                    document.getElementById(
                        "percentageChangeNew"
                    ).value
                );

            const result =
                document.getElementById(
                    "percentageChangeResult"
                );

            if (
                !Number.isFinite(oldValue) ||
                !Number.isFinite(newValue)
            ) {
                result.textContent =
                    "Please enter both values.";

                return;
            }

            if (oldValue === 0) {
                result.textContent =
                    "Original value cannot be zero.";

                return;
            }

            const difference =
                newValue - oldValue;

            const percentage =
                (difference / Math.abs(oldValue)) * 100;

            const formatted =
                Math.abs(percentage).toLocaleString(
                    undefined,
                    {
                        maximumFractionDigits: 4
                    }
                );

            if (difference > 0) {

                result.innerHTML = `
                    <strong>Percentage Increase</strong><br><br>

                    Difference:
                    ${difference.toLocaleString()}<br>

                    Increase:
                    <strong>${formatted}%</strong>
                `;

            } else if (difference < 0) {

                result.innerHTML = `
                    <strong>Percentage Decrease</strong><br><br>

                    Difference:
                    ${Math.abs(
                        difference
                    ).toLocaleString()}<br>

                    Decrease:
                    <strong>${formatted}%</strong>
                `;

            } else {

                result.innerHTML = `
                    <strong>No Change</strong><br><br>

                    The value has not changed.
                `;
            }

        });

    document
        .getElementById("resetPercentageChange")
        .addEventListener("click", () => {

            document.getElementById(
                "percentageChangeOld"
            ).value = "";

            document.getElementById(
                "percentageChangeNew"
            ).value = "";

            document.getElementById(
                "percentageChangeResult"
            ).textContent =
                "Enter the original and new values.";
        });
}


/* =========================================================
   SIP CALCULATOR
   ========================================================= */

function renderSIPCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Monthly Investment (₹)
                <input
                    type="number"
                    id="sipInvestment"
                    placeholder="Example: 5000"
                >
            </label>

            <label>
                Expected Annual Return (%)
                <input
                    type="number"
                    id="sipRate"
                    step="0.01"
                    placeholder="Example: 12"
                >
            </label>

            <label>
                Investment Period (Years)
                <input
                    type="number"
                    id="sipYears"
                    placeholder="Example: 10"
                >
            </label>

            <button
                class="primary-btn"
                id="calculateSIP"
            >
                Calculate SIP
            </button>

            <button
                class="secondary-btn"
                id="resetSIP"
            >
                Reset
            </button>

            <div
                class="result-box"
                id="sipResult"
            >
                Enter SIP details to calculate estimated returns.
            </div>

        </div>
    `;

    document
        .getElementById("calculateSIP")
        .addEventListener("click", () => {

            const monthly =
                Number(
                    document.getElementById(
                        "sipInvestment"
                    ).value
                );

            const annualRate =
                Number(
                    document.getElementById(
                        "sipRate"
                    ).value
                );

            const years =
                Number(
                    document.getElementById(
                        "sipYears"
                    ).value
                );

            const result =
                document.getElementById(
                    "sipResult"
                );

            if (
                !Number.isFinite(monthly) ||
                !Number.isFinite(annualRate) ||
                !Number.isFinite(years) ||
                monthly <= 0 ||
                annualRate < 0 ||
                years <= 0
            ) {

                result.textContent =
                    "Please enter valid SIP details.";

                return;
            }

            const months =
                Math.round(years * 12);

            const monthlyRate =
                annualRate / 12 / 100;

            let futureValue;

            if (monthlyRate === 0) {

                futureValue =
                    monthly * months;

            } else {

                futureValue =
                    monthly *
                    (
                        (
                            Math.pow(
                                1 + monthlyRate,
                                months
                            ) - 1
                        ) /
                        monthlyRate
                    ) *
                    (1 + monthlyRate);
            }

            const invested =
                monthly * months;

            const estimatedReturns =
                futureValue - invested;

            const formatMoney = value =>
                "₹" +
                value.toLocaleString(
                    "en-IN",
                    {
                        maximumFractionDigits: 0
                    }
                );

            result.innerHTML = `
                <strong>SIP Estimate</strong><br><br>

                Total Investment:
                <strong>${formatMoney(
                    invested
                )}</strong><br>

                Estimated Returns:
                <strong>${formatMoney(
                    estimatedReturns
                )}</strong><br>

                Estimated Future Value:
                <strong>${formatMoney(
                    futureValue
                )}</strong>
            `;

        });

    document
        .getElementById("resetSIP")
        .addEventListener("click", () => {

            document.getElementById(
                "sipInvestment"
            ).value = "";

            document.getElementById(
                "sipRate"
            ).value = "";

            document.getElementById(
                "sipYears"
            ).value = "";

            document.getElementById(
                "sipResult"
            ).textContent =
                "Enter SIP details to calculate estimated returns.";
        });
}


/* =========================================================
   LOAN CALCULATOR
   ========================================================= */

function renderLoanCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Loan Amount (₹)
                <input
                    type="number"
                    id="loanAmount"
                    placeholder="Example: 500000"
                >
            </label>

            <label>
                Annual Interest Rate (%)
                <input
                    type="number"
                    id="loanRate"
                    step="0.01"
                    placeholder="Example: 10"
                >
            </label>

            <label>
                Loan Tenure (Years)
                <input
                    type="number"
                    id="loanYears"
                    placeholder="Example: 5"
                >
            </label>

            <button
                class="primary-btn"
                id="calculateLoan"
            >
                Calculate EMI
            </button>

            <button
                class="secondary-btn"
                id="resetLoan"
            >
                Reset
            </button>

            <div
                class="result-box"
                id="loanResult"
            >
                Enter loan details to calculate EMI.
            </div>

        </div>
    `;

    document
        .getElementById("calculateLoan")
        .addEventListener("click", () => {

            const principal =
                Number(
                    document.getElementById(
                        "loanAmount"
                    ).value
                );

            const annualRate =
                Number(
                    document.getElementById(
                        "loanRate"
                    ).value
                );

            const years =
                Number(
                    document.getElementById(
                        "loanYears"
                    ).value
                );

            const result =
                document.getElementById(
                    "loanResult"
                );

            if (
                !Number.isFinite(principal) ||
                !Number.isFinite(annualRate) ||
                !Number.isFinite(years) ||
                principal <= 0 ||
                annualRate < 0 ||
                years <= 0
            ) {

                result.textContent =
                    "Please enter valid loan details.";

                return;
            }

            const months =
                Math.round(years * 12);

            const monthlyRate =
                annualRate / 12 / 100;

            let emi;

            if (monthlyRate === 0) {

                emi =
                    principal / months;

            } else {

                emi =
                    principal *
                    monthlyRate *
                    Math.pow(
                        1 + monthlyRate,
                        months
                    ) /
                    (
                        Math.pow(
                            1 + monthlyRate,
                            months
                        ) - 1
                    );
            }

            const totalPayment =
                emi * months;

            const totalInterest =
                totalPayment - principal;

            const formatMoney = value =>
                "₹" +
                value.toLocaleString(
                    "en-IN",
                    {
                        maximumFractionDigits: 0
                    }
                );

            result.innerHTML = `
                <strong>Loan Result</strong><br><br>

                Monthly EMI:
                <strong>${formatMoney(
                    emi
                )}</strong><br>

                Total Interest:
                <strong>${formatMoney(
                    totalInterest
                )}</strong><br>

                Total Payment:
                <strong>${formatMoney(
                    totalPayment
                )}</strong>
            `;

        });

    document
        .getElementById("resetLoan")
        .addEventListener("click", () => {

            document.getElementById(
                "loanAmount"
            ).value = "";

            document.getElementById(
                "loanRate"
            ).value = "";

            document.getElementById(
                "loanYears"
            ).value = "";

            document.getElementById(
                "loanResult"
            ).textContent =
                "Enter loan details to calculate EMI.";
        });
}


/* =========================================================
   SALARY CALCULATOR
   ========================================================= */

function renderSalaryCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Annual CTC (₹)
                <input
                    type="number"
                    id="salaryCTC"
                    placeholder="Example: 600000"
                >
            </label>

            <label>
                Monthly Deductions (₹)
                <input
                    type="number"
                    id="salaryDeductions"
                    placeholder="Example: 3000"
                >
            </label>

            <button
                class="primary-btn"
                id="calculateSalary"
            >
                Calculate Salary
            </button>

            <button
                class="secondary-btn"
                id="resetSalary"
            >
                Reset
            </button>

            <div
                class="result-box"
                id="salaryResult"
            >
                Enter your annual CTC and monthly deductions.
            </div>

        </div>
    `;

    document
        .getElementById("calculateSalary")
        .addEventListener("click", () => {

            const ctc =
                Number(
                    document.getElementById(
                        "salaryCTC"
                    ).value
                );

            const deductions =
                Number(
                    document.getElementById(
                        "salaryDeductions"
                    ).value
                );

            const result =
                document.getElementById(
                    "salaryResult"
                );

            if (
                !Number.isFinite(ctc) ||
                !Number.isFinite(deductions) ||
                ctc <= 0 ||
                deductions < 0
            ) {

                result.textContent =
                    "Please enter valid salary details.";

                return;
            }

            const monthlyGross =
                ctc / 12;

            const monthlyNet =
                Math.max(
                    0,
                    monthlyGross - deductions
                );

            const annualNet =
                monthlyNet * 12;

            const formatMoney = value =>
                "₹" +
                value.toLocaleString(
                    "en-IN",
                    {
                        maximumFractionDigits: 0
                    }
                );

            result.innerHTML = `
                <strong>Salary Estimate</strong><br><br>

                Annual CTC:
                <strong>${formatMoney(
                    ctc
                )}</strong><br>

                Monthly Gross:
                <strong>${formatMoney(
                    monthlyGross
                )}</strong><br>

                Monthly Deductions:
                <strong>${formatMoney(
                    deductions
                )}</strong><br>

                Estimated Monthly Take-Home:
                <strong>${formatMoney(
                    monthlyNet
                )}</strong><br>

                Estimated Annual Take-Home:
                <strong>${formatMoney(
                    annualNet
                )}</strong>
            `;

        });

    document
        .getElementById("resetSalary")
        .addEventListener("click", () => {

            document.getElementById(
                "salaryCTC"
            ).value = "";

            document.getElementById(
                "salaryDeductions"
            ).value = "";

            document.getElementById(
                "salaryResult"
            ).textContent =
                "Enter your annual CTC and monthly deductions.";
        });
}


/* =========================================================
   NUMBER TO WORDS — INDIAN FORMAT
   ========================================================= */

function renderNumberToWords(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Enter Number
                <input
                    type="number"
                    id="numberWordsInput"
                    placeholder="Example: 125000"
                >
            </label>

            <button
                class="primary-btn"
                id="convertNumberWords"
            >
                Convert to Words
            </button>

            <button
                class="secondary-btn"
                id="resetNumberWords"
            >
                Reset
            </button>

            <div
                class="result-box"
                id="numberWordsResult"
            >
                Enter a number to convert it into words.
            </div>

        </div>
    `;

    const ones = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine"
    ];

    const teens = [
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen"
    ];

    const tens = [
        "",
        "",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety"
    ];

    function twoDigits(number) {

        if (number < 10) {
            return ones[number];
        }

        if (number < 20) {
            return teens[number - 10];
        }

        return (
            tens[Math.floor(number / 10)] +
            (
                number % 10
                    ? " " + ones[number % 10]
                    : ""
            )
        );
    }

    function threeDigits(number) {

        if (number < 100) {
            return twoDigits(number);
        }

        return (
            ones[Math.floor(number / 100)] +
            " Hundred" +
            (
                number % 100
                    ? " " + twoDigits(number % 100)
                    : ""
            )
        );
    }

    function indianWords(number) {

        number = Math.floor(number);

        if (number === 0) {
            return "Zero";
        }

        const parts = [];

        const crore =
            Math.floor(number / 10000000);

        number %= 10000000;

        const lakh =
            Math.floor(number / 100000);

        number %= 100000;

        const thousand =
            Math.floor(number / 1000);

        number %= 1000;

        if (crore) {
            parts.push(
                threeDigits(crore) +
                " Crore"
            );
        }

        if (lakh) {
            parts.push(
                twoDigits(lakh) +
                " Lakh"
            );
        }

        if (thousand) {
            parts.push(
                twoDigits(thousand) +
                " Thousand"
            );
        }

        if (number) {
            parts.push(
                threeDigits(number)
            );
        }

        return parts.join(" ");
    }

    document
        .getElementById("convertNumberWords")
        .addEventListener("click", () => {

            const value =
                Number(
                    document.getElementById(
                        "numberWordsInput"
                    ).value
                );

            const result =
                document.getElementById(
                    "numberWordsResult"
                );

            if (
                !Number.isFinite(value) ||
                value < 0
            ) {

                result.textContent =
                    "Please enter a valid positive number.";

                return;
            }

            if (value > 999999999999) {

                result.textContent =
                    "Please enter a number up to 99,999 crore.";

                return;
            }

            const integerPart =
                Math.floor(value);

            const decimalPart =
                Math.round(
                    (value - integerPart) * 100
                );

            let words =
                indianWords(integerPart);

            let output =
                `₹${value.toLocaleString(
                    "en-IN",
                    {
                        maximumFractionDigits: 2
                    }
                )}<br><br>`;

            output +=
                `<strong>${words} Rupees`;

            if (decimalPart > 0) {

                output +=
                    ` and ${indianWords(
                        decimalPart
                    )} Paise`;
            }

            output +=
                ` Only</strong>`;

            result.innerHTML = output;
        });

    document
        .getElementById("resetNumberWords")
        .addEventListener("click", () => {

            document.getElementById(
                "numberWordsInput"
            ).value = "";

            document.getElementById(
                "numberWordsResult"
            ).textContent =
                "Enter a number to convert it into words.";
        });
}


/* =========================================================
   PASSWORD GENERATOR
   ========================================================= */

function renderPasswordGenerator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Password Length
                <input
                    type="number"
                    id="passwordLength"
                    value="16"
                    min="4"
                    max="128"
                >
            </label>

            <label>
                <input
                    type="checkbox"
                    id="passwordUppercase"
                    checked
                >
                Include Uppercase Letters
            </label>

            <label>
                <input
                    type="checkbox"
                    id="passwordLowercase"
                    checked
                >
                Include Lowercase Letters
            </label>

            <label>
                <input
                    type="checkbox"
                    id="passwordNumbers"
                    checked
                >
                Include Numbers
            </label>

            <label>
                <input
                    type="checkbox"
                    id="passwordSymbols"
                    checked
                >
                Include Symbols
            </label>

            <button
                class="primary-btn"
                id="generatePassword"
            >
                Generate Password
            </button>

            <button
                class="secondary-btn"
                id="copyPassword"
            >
                Copy Password
            </button>

            <div
                class="result-box"
                id="passwordResult"
            >
                Click Generate Password.
            </div>

        </div>
    `;

    function generateSecurePassword(length, options) {

        let characters = "";

        if (options.uppercase) {
            characters +=
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (options.lowercase) {
            characters +=
                "abcdefghijklmnopqrstuvwxyz";
        }

        if (options.numbers) {
            characters +=
                "0123456789";
        }

        if (options.symbols) {
            characters +=
                "!@#$%^&*()_+-=[]{}|;:,.<>?";
        }

        if (!characters) {
            return "";
        }

        let password = "";

        if (
            window.crypto &&
            window.crypto.getRandomValues
        ) {

            const randomValues =
                new Uint32Array(length);

            window.crypto.getRandomValues(
                randomValues
            );

            for (
                let i = 0;
                i < length;
                i++
            ) {

                password +=
                    characters[
                        randomValues[i] %
                        characters.length
                    ];
            }

        } else {

            for (
                let i = 0;
                i < length;
                i++
            ) {

                password +=
                    characters[
                        Math.floor(
                            Math.random() *
                            characters.length
                        )
                    ];
            }
        }

        return password;
    }

    document
        .getElementById("generatePassword")
        .addEventListener("click", () => {

            const length =
                Number(
                    document.getElementById(
                        "passwordLength"
                    ).value
                );

            const options = {

                uppercase:
                    document.getElementById(
                        "passwordUppercase"
                    ).checked,

                lowercase:
                    document.getElementById(
                        "passwordLowercase"
                    ).checked,

                numbers:
                    document.getElementById(
                        "passwordNumbers"
                    ).checked,

                symbols:
                    document.getElementById(
                        "passwordSymbols"
                    ).checked
            };

            const result =
                document.getElementById(
                    "passwordResult"
                );

            if (
                !Number.isInteger(length) ||
                length < 4 ||
                length > 128
            ) {

                result.textContent =
                    "Password length must be between 4 and 128.";

                return;
            }

            if (
                !options.uppercase &&
                !options.lowercase &&
                !options.numbers &&
                !options.symbols
            ) {

                result.textContent =
                    "Select at least one character type.";

                return;
            }

            const password =
                generateSecurePassword(
                    length,
                    options
                );

            result.innerHTML = `
                <strong>Your Password</strong><br><br>

                <span
                    style="
                        word-break: break-all;
                        font-family: monospace;
                        font-size: 1.05rem;
                    "
                >
                    ${escapeHTML(password)}
                </span>
            `;
        });

    document
        .getElementById("copyPassword")
        .addEventListener("click", async () => {

            const result =
                document.getElementById(
                    "passwordResult"
                );

            const text =
                result
                    .innerText
                    .replace(
                        "Your Password",
                        ""
                    )
                    .trim();

            if (!text) {

                showToolError(
                    "Generate a password first."
                );

                return;
            }

            try {

                await navigator.clipboard.writeText(
                    text
                );

                showToast(
                    "Password copied successfully."
                );

            } catch (error) {

                showToolError(
                    "Unable to copy password."
                );
            }
        });
}
/* =========================================================
   RANDOM NUMBER GENERATOR
   ========================================================= */

function renderRandomNumber(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Minimum Number
                <input
                    type="number"
                    id="randomMin"
                    placeholder="e.g. 1"
                    value="1"
                >
            </label>

            <label>
                Maximum Number
                <input
                    type="number"
                    id="randomMax"
                    placeholder="e.g. 100"
                    value="100"
                >
            </label>

            <button
                class="primary-btn"
                id="randomGenerate"
            >
                🎲 Generate Number
            </button>

            <div
                class="result-box"
                id="randomResult"
            >
                Your random number will appear here.
            </div>

        </div>
    `;

    document
        .getElementById("randomGenerate")
        .onclick = () => {

            const min = Number(
                document.getElementById("randomMin").value
            );

            const max = Number(
                document.getElementById("randomMax").value
            );

            if (
                !Number.isFinite(min) ||
                !Number.isFinite(max)
            ) {
                showToolError(
                    "Please enter valid minimum and maximum numbers."
                );
                return;
            }

            if (min > max) {
                showToolError(
                    "Minimum number cannot be greater than maximum number."
                );
                return;
            }

            const result =
                Math.floor(
                    Math.random() * (max - min + 1)
                ) + min;

            document.getElementById(
                "randomResult"
            ).innerHTML = `
                <strong>Random Number</strong>
                <div style="font-size:2rem;margin-top:10px;">
                    ${result}
                </div>
            `;
        };
}


/* =========================================================
   RANDOM CHOICE PICKER
   ========================================================= */

function renderRandomChoice(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Enter Choices
                <textarea
                    id="choiceInput"
                    rows="7"
                    placeholder="Enter one choice per line&#10;&#10;Example:&#10;Math&#10;Physics&#10;Chemistry&#10;Biology"
                ></textarea>
            </label>

            <button
                class="primary-btn"
                id="choicePick"
            >
                🎯 Pick Random Choice
            </button>

            <div
                class="result-box"
                id="choiceResult"
            >
                Your random choice will appear here.
            </div>

        </div>
    `;

    document
        .getElementById("choicePick")
        .onclick = () => {

            const input =
                document.getElementById(
                    "choiceInput"
                ).value;

            const choices = input
                .split(/\r?\n/)
                .map(item => item.trim())
                .filter(Boolean);

            if (!choices.length) {

                showToolError(
                    "Please enter at least two choices."
                );

                return;
            }

            if (choices.length === 1) {

                showToolError(
                    "Please enter at least two choices."
                );

                return;
            }

            const randomIndex =
                Math.floor(
                    Math.random() * choices.length
                );

            const selected =
                choices[randomIndex];

            document.getElementById(
                "choiceResult"
            ).innerHTML = `
                <strong>🎯 Selected Choice</strong>

                <div
                    style="
                        font-size:1.4rem;
                        margin-top:12px;
                        font-weight:700;
                    "
                >
                    ${escapeHTML(selected)}
                </div>
            `;
        };
}


/* =========================================================
   LUCKY NUMBER GENERATOR
   ========================================================= */

function renderLuckyNumber(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Minimum Number
                <input
                    type="number"
                    id="luckyMin"
                    value="1"
                >
            </label>

            <label>
                Maximum Number
                <input
                    type="number"
                    id="luckyMax"
                    value="100"
                >
            </label>

            <button
                class="primary-btn"
                id="luckyGenerate"
            >
                🍀 Generate Lucky Number
            </button>

            <div
                class="result-box"
                id="luckyResult"
            >
                Your lucky number will appear here.
            </div>

        </div>
    `;

    document
        .getElementById("luckyGenerate")
        .onclick = () => {

            const min = Number(
                document.getElementById("luckyMin").value
            );

            const max = Number(
                document.getElementById("luckyMax").value
            );

            if (
                !Number.isFinite(min) ||
                !Number.isFinite(max)
            ) {

                showToolError(
                    "Please enter valid numbers."
                );

                return;
            }

            if (min > max) {

                showToolError(
                    "Minimum number cannot be greater than maximum number."
                );

                return;
            }

            const luckyNumber =
                Math.floor(
                    Math.random() * (max - min + 1)
                ) + min;

            document.getElementById(
                "luckyResult"
            ).innerHTML = `
                <div style="font-size:2rem;">
                    🍀
                </div>

                <strong>Your Lucky Number</strong>

                <div
                    style="
                        font-size:2.5rem;
                        font-weight:800;
                        margin-top:10px;
                    "
                >
                    ${luckyNumber}
                </div>

                <small>
                    Randomly generated
                </small>
            `;
        };
}
/* =========================================================
   IMAGE COMPRESSOR
   ========================================================= */

function renderImageCompressor(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Select Image

                <input
                    id="compressImageFile"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                >
            </label>

            <label>
                Compression Quality

                <select id="compressImageQuality">

                    <option value="0.85">
                        High Quality
                    </option>

                    <option value="0.70" selected>
                        Balanced
                    </option>

                    <option value="0.50">
                        Medium
                    </option>

                    <option value="0.30">
                        Small Size
                    </option>

                </select>
            </label>

            <button
                class="primary-btn"
                id="compressImageBtn"
            >
                Compress Image
            </button>

            <div
                class="result-box"
                id="compressImageResult"
            >
                Select an image to begin.
            </div>

        </div>

    `;

    const fileInput =
        document.getElementById(
            "compressImageFile"
        );

    const qualityInput =
        document.getElementById(
            "compressImageQuality"
        );

    const button =
        document.getElementById(
            "compressImageBtn"
        );

    const result =
        document.getElementById(
            "compressImageResult"
        );

    button.onclick = () => {

        const file = fileInput.files[0];

        if (!file) {

            result.textContent =
                "Please select an image.";

            return;
        }

        if (!file.type.startsWith("image/")) {

            result.textContent =
                "Please select a valid image.";

            return;
        }

        const reader =
            new FileReader();

        reader.onload = () => {

            const img =
                new Image();

            img.onload = () => {

                const canvas =
                    document.createElement(
                        "canvas"
                    );

                canvas.width =
                    img.naturalWidth;

                canvas.height =
                    img.naturalHeight;

                const ctx =
                    canvas.getContext("2d");

                ctx.drawImage(
                    img,
                    0,
                    0
                );

                const quality =
                    Number(
                        qualityInput.value
                    );

                /*
                 * JPEG output gives better
                 * compression for photographs.
                 */

                canvas.toBlob(
                    (blob) => {

                        if (!blob) {

                            result.textContent =
                                "Compression failed.";

                            return;
                        }

                        const oldSize =
                            file.size;

                        const newSize =
                            blob.size;

                        const saved =
                            Math.max(
                                0,
                                (
                                    (oldSize - newSize) /
                                    oldSize
                                ) * 100
                            );

                        const url =
                            URL.createObjectURL(
                                blob
                            );

                        const link =
                            document.createElement(
                                "a"
                            );

                        link.href = url;

                        link.download =
                            "utilitybox-compressed.jpg";

                        link.textContent =
                            "Download Compressed Image";

                        link.className =
                            "primary-btn";

                        link.style.display =
                            "inline-block";

                        link.style.marginTop =
                            "12px";

                        result.innerHTML = `
                            <strong>
                                Compression Complete
                            </strong>
                            <br><br>
                            Original:
                            ${formatFileSize(oldSize)}
                            <br>
                            Compressed:
                            ${formatFileSize(newSize)}
                            <br>
                            Saved:
                            ${saved.toFixed(1)}%
                            <br>
                        `;

                        result.appendChild(
                            link
                        );

                    },
                    "image/jpeg",
                    quality
                );

            };

            img.onerror = () => {

                result.textContent =
                    "Unable to read this image.";

            };

            img.src =
                reader.result;

        };

        reader.readAsDataURL(file);
    };
}


/* =========================================================
   IMAGE CONVERTER
   ========================================================= */

function renderImageConverter(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Select Image

                <input
                    id="convertImageFile"
                    type="file"
                    accept="image/*"
                >
            </label>

            <label>
                Convert To

                <select id="convertImageFormat">

                    <option value="image/jpeg">
                        JPG
                    </option>

                    <option value="image/png">
                        PNG
                    </option>

                    <option value="image/webp">
                        WebP
                    </option>

                </select>
            </label>

            <button
                class="primary-btn"
                id="convertImageBtn"
            >
                Convert Image
            </button>

            <div
                class="result-box"
                id="convertImageResult"
            >
                Select an image to convert.
            </div>

        </div>

    `;

    const fileInput =
        document.getElementById(
            "convertImageFile"
        );

    const formatInput =
        document.getElementById(
            "convertImageFormat"
        );

    const button =
        document.getElementById(
            "convertImageBtn"
        );

    const result =
        document.getElementById(
            "convertImageResult"
        );

    button.onclick = () => {

        const file =
            fileInput.files[0];

        if (!file) {

            result.textContent =
                "Please select an image.";

            return;
        }

        const reader =
            new FileReader();

        reader.onload = () => {

            const img =
                new Image();

            img.onload = () => {

                const canvas =
                    document.createElement(
                        "canvas"
                    );

                canvas.width =
                    img.naturalWidth;

                canvas.height =
                    img.naturalHeight;

                const ctx =
                    canvas.getContext("2d");

                /*
                 * White background prevents
                 * transparent PNG areas from
                 * becoming black in JPG.
                 */

                if (
                    formatInput.value ===
                    "image/jpeg"
                ) {

                    ctx.fillStyle =
                        "#ffffff";

                    ctx.fillRect(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                }

                ctx.drawImage(
                    img,
                    0,
                    0
                );

                canvas.toBlob(
                    (blob) => {

                        if (!blob) {

                            result.textContent =
                                "Conversion failed.";

                            return;
                        }

                        const url =
                            URL.createObjectURL(
                                blob
                            );

                        const extensionMap = {
                            "image/jpeg": "jpg",
                            "image/png": "png",
                            "image/webp": "webp"
                        };

                        const extension =
                            extensionMap[
                                formatInput.value
                            ];

                        const link =
                            document.createElement(
                                "a"
                            );

                        link.href =
                            url;

                        link.download =
                            `utilitybox-converted.${extension}`;

                        link.textContent =
                            "Download Converted Image";

                        link.className =
                            "primary-btn";

                        link.style.display =
                            "inline-block";

                        link.style.marginTop =
                            "12px";

                        result.innerHTML = `
                            <strong>
                                Conversion Complete
                            </strong>
                            <br><br>
                            Format:
                            ${extension.toUpperCase()}
                            <br>
                            Size:
                            ${formatFileSize(blob.size)}
                            <br>
                        `;

                        result.appendChild(
                            link
                        );

                    },
                    formatInput.value,
                    0.92
                );

            };

            img.onerror = () => {

                result.textContent =
                    "Unable to read this image.";

            };

            img.src =
                reader.result;

        };

        reader.readAsDataURL(file);
    };
}


/* =========================================================
   IMAGE INFORMATION
   ========================================================= */

function renderImageInfo(container) {

    container.innerHTML = `

        <div class="tool-form">

            <label>
                Select Image

                <input
                    id="imageInfoFile"
                    type="file"
                    accept="image/*"
                >
            </label>

            <div
                class="result-box"
                id="imageInfoResult"
            >
                Select an image to view its information.
            </div>

        </div>

    `;

    const fileInput =
        document.getElementById(
            "imageInfoFile"
        );

    const result =
        document.getElementById(
            "imageInfoResult"
        );

    fileInput.onchange = () => {

        const file =
            fileInput.files[0];

        if (!file) {

            result.textContent =
                "No image selected.";

            return;
        }

        const reader =
            new FileReader();

        reader.onload = () => {

            const img =
                new Image();

            img.onload = () => {

                const aspectRatio =
                    img.naturalWidth /
                    img.naturalHeight;

                result.innerHTML = `

                    <strong>
                        Image Information
                    </strong>

                    <br><br>

                    <strong>File Name:</strong>
                    ${escapeHTML(file.name)}

                    <br>

                    <strong>Format:</strong>
                    ${escapeHTML(file.type || "Unknown")}

                    <br>

                    <strong>File Size:</strong>
                    ${formatFileSize(file.size)}

                    <br>

                    <strong>Width:</strong>
                    ${img.naturalWidth}px

                    <br>

                    <strong>Height:</strong>
                    ${img.naturalHeight}px

                    <br>

                    <strong>Aspect Ratio:</strong>
                    ${aspectRatio.toFixed(2)}

                `;

            };

            img.onerror = () => {

                result.textContent =
                    "Unable to read image information.";

            };

            img.src =
                reader.result;

        };

        reader.readAsDataURL(file);
    };
}


/* =========================================================
   FILE SIZE FORMATTER
   ========================================================= */

function formatFileSize(bytes) {

    if (!Number.isFinite(bytes) || bytes < 0) {
        return "0 Bytes";
    }

    if (bytes < 1024) {
        return `${bytes} Bytes`;
    }

    if (bytes < 1024 * 1024) {
        return `${(bytes / 1024).toFixed(2)} KB`;
    }

    if (bytes < 1024 * 1024 * 1024) {
        return `${(
            bytes /
            (1024 * 1024)
        ).toFixed(2)} MB`;
    }

    return `${(
        bytes /
        (1024 * 1024 * 1024)
    ).toFixed(2)} GB`;
}
/* =========================================================
   PHASE 5 — STUDENT TOOLS
   ========================================================= */


/* =========================================================
   MARKS PERCENTAGE CALCULATOR
   ========================================================= */

function renderMarksPercentage(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Total Marks
                <input
                    type="number"
                    id="mpTotal"
                    placeholder="Example: 500"
                    min="1"
                >
            </label>

            <label>
                Obtained Marks
                <input
                    type="number"
                    id="mpObtained"
                    placeholder="Example: 425"
                    min="0"
                >
            </label>

            <button
                class="primary-btn"
                id="mpCalculate"
            >
                Calculate Percentage
            </button>

            <div
                class="result-box"
                id="mpResult"
            >
                Enter your marks.
            </div>

        </div>
    `;

    document
        .getElementById("mpCalculate")
        .addEventListener("click", () => {

            const total = Number(
                document.getElementById("mpTotal").value
            );

            const obtained = Number(
                document.getElementById("mpObtained").value
            );

            const result =
                document.getElementById("mpResult");

            if (
                !Number.isFinite(total) ||
                !Number.isFinite(obtained) ||
                total <= 0 ||
                obtained < 0 ||
                obtained > total
            ) {
                result.innerHTML =
                    "⚠️ Please enter valid marks.";
                return;
            }

            const percentage =
                (obtained / total) * 100;

            result.innerHTML = `
                <strong>Percentage</strong>

                <div class="result-value">
                    ${percentage.toFixed(2)}%
                </div>

                <p>
                    ${obtained} out of ${total} marks
                </p>
            `;
        });
}


/* =========================================================
   GRADE CALCULATOR
   ========================================================= */

function renderGradeCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Enter Percentage
                <input
                    type="number"
                    id="gradePercentage"
                    placeholder="Example: 85"
                    min="0"
                    max="100"
                    step="0.01"
                >
            </label>

            <button
                class="primary-btn"
                id="gradeCalculate"
            >
                Calculate Grade
            </button>

            <div
                class="result-box"
                id="gradeResult"
            >
                Enter your percentage.
            </div>

        </div>
    `;

    document
        .getElementById("gradeCalculate")
        .addEventListener("click", () => {

            const percentage = Number(
                document.getElementById(
                    "gradePercentage"
                ).value
            );

            const result =
                document.getElementById(
                    "gradeResult"
                );

            if (
                !Number.isFinite(percentage) ||
                percentage < 0 ||
                percentage > 100
            ) {
                result.innerHTML =
                    "⚠️ Enter a percentage between 0 and 100.";
                return;
            }

            let grade;
            let description;

            if (percentage >= 90) {
                grade = "A+";
                description = "Excellent";
            } else if (percentage >= 80) {
                grade = "A";
                description = "Very Good";
            } else if (percentage >= 70) {
                grade = "B+";
                description = "Good";
            } else if (percentage >= 60) {
                grade = "B";
                description = "Above Average";
            } else if (percentage >= 50) {
                grade = "C";
                description = "Average";
            } else if (percentage >= 40) {
                grade = "D";
                description = "Pass";
            } else {
                grade = "F";
                description = "Needs Improvement";
            }

            result.innerHTML = `
                <strong>Your Grade</strong>

                <div class="result-value">
                    ${grade}
                </div>

                <p>
                    ${percentage.toFixed(2)}% — ${description}
                </p>
            `;
        });
}


/* =========================================================
   TARGET MARKS CALCULATOR
   ========================================================= */

function renderTargetMarks(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Total Marks
                <input
                    type="number"
                    id="tmTotal"
                    placeholder="Example: 500"
                    min="1"
                >
            </label>

            <label>
                Current Obtained Marks
                <input
                    type="number"
                    id="tmCurrent"
                    placeholder="Example: 350"
                    min="0"
                >
            </label>

            <label>
                Target Percentage
                <input
                    type="number"
                    id="tmTarget"
                    placeholder="Example: 80"
                    min="0"
                    max="100"
                    step="0.01"
                >
            </label>

            <button
                class="primary-btn"
                id="tmCalculate"
            >
                Calculate Target
            </button>

            <div
                class="result-box"
                id="tmResult"
            >
                Enter your details.
            </div>

        </div>
    `;

    document
        .getElementById("tmCalculate")
        .addEventListener("click", () => {

            const total =
                Number(
                    document.getElementById(
                        "tmTotal"
                    ).value
                );

            const current =
                Number(
                    document.getElementById(
                        "tmCurrent"
                    ).value
                );

            const target =
                Number(
                    document.getElementById(
                        "tmTarget"
                    ).value
                );

            const result =
                document.getElementById(
                    "tmResult"
                );

            if (
                !Number.isFinite(total) ||
                !Number.isFinite(current) ||
                !Number.isFinite(target) ||
                total <= 0 ||
                current < 0 ||
                current > total ||
                target < 0 ||
                target > 100
            ) {
                result.innerHTML =
                    "⚠️ Please enter valid values.";
                return;
            }

            const targetMarks =
                (total * target) / 100;

            const required =
                targetMarks - current;

            if (required <= 0) {

                result.innerHTML = `
                    <strong>Target Achieved 🎉</strong>

                    <div class="result-value">
                        ${targetMarks.toFixed(2)}
                    </div>

                    <p>
                        You have already reached
                        your target percentage.
                    </p>
                `;

                return;
            }

            if (targetMarks > total) {

                result.innerHTML =
                    "⚠️ Target percentage is not possible.";

                return;
            }

            result.innerHTML = `
                <strong>Additional Marks Required</strong>

                <div class="result-value">
                    ${required.toFixed(2)}
                </div>

                <p>
                    You need at least
                    <strong>${Math.ceil(required)}</strong>
                    more marks to reach
                    ${target}%.
                </p>
            `;
        });
}


/* =========================================================
   STUDY TIME CALCULATOR
   ========================================================= */

function renderStudyTime(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Available Time (hours)
                <input
                    type="number"
                    id="studyHours"
                    placeholder="Example: 6"
                    min="0.5"
                    step="0.5"
                >
            </label>

            <label>
                Number of Subjects
                <input
                    type="number"
                    id="studySubjects"
                    placeholder="Example: 4"
                    min="1"
                    step="1"
                >
            </label>

            <label>
                Break Time Between Subjects (minutes)
                <input
                    type="number"
                    id="studyBreak"
                    placeholder="Example: 10"
                    min="0"
                    step="1"
                >
            </label>

            <button
                class="primary-btn"
                id="studyTimeCalculate"
            >
                Calculate Study Time
            </button>

            <div
                class="result-box"
                id="studyTimeResult"
            >
                Enter your study plan.
            </div>

        </div>
    `;

    document
        .getElementById("studyTimeCalculate")
        .addEventListener("click", () => {

            const hours =
                Number(
                    document.getElementById(
                        "studyHours"
                    ).value
                );

            const subjects =
                Number(
                    document.getElementById(
                        "studySubjects"
                    ).value
                );

            const breakMinutes =
                Number(
                    document.getElementById(
                        "studyBreak"
                    ).value
                );

            const result =
                document.getElementById(
                    "studyTimeResult"
                );

            if (
                !Number.isFinite(hours) ||
                !Number.isFinite(subjects) ||
                !Number.isFinite(breakMinutes) ||
                hours <= 0 ||
                subjects <= 0 ||
                breakMinutes < 0
            ) {
                result.innerHTML =
                    "⚠️ Please enter valid values.";
                return;
            }

            const totalMinutes =
                hours * 60;

            const totalBreaks =
                Math.max(subjects - 1, 0) *
                breakMinutes;

            const availableStudyMinutes =
                totalMinutes - totalBreaks;

            if (availableStudyMinutes <= 0) {

                result.innerHTML =
                    "⚠️ Break time is too long for the available study time.";

                return;
            }

            const perSubject =
                availableStudyMinutes /
                subjects;

            const subjectHours =
                Math.floor(
                    perSubject / 60
                );

            const subjectMinutes =
                Math.round(
                    perSubject % 60
                );

            result.innerHTML = `
                <strong>Recommended Study Time</strong>

                <div class="result-value">
                    ${subjectHours}h
                    ${subjectMinutes}m
                </div>

                <p>
                    Approx. study time per subject.
                </p>

                <p>
                    Total study time:
                    ${Math.floor(availableStudyMinutes / 60)}h
                    ${Math.round(availableStudyMinutes % 60)}m
                </p>
            `;
        });
}


/* =========================================================
   STUDY SCHEDULE GENERATOR
   ========================================================= */

function renderStudySchedule(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Number of Subjects
                <input
                    type="number"
                    id="scheduleSubjects"
                    placeholder="Example: 4"
                    min="1"
                    max="15"
                >
            </label>

            <label>
                Available Study Hours
                <input
                    type="number"
                    id="scheduleHours"
                    placeholder="Example: 6"
                    min="1"
                    max="24"
                    step="0.5"
                >
            </label>

            <label>
                Break Between Sessions (minutes)
                <input
                    type="number"
                    id="scheduleBreak"
                    placeholder="Example: 10"
                    min="0"
                    max="60"
                >
            </label>

            <label>
                Subject Names
                <textarea
                    id="scheduleNames"
                    rows="5"
                    placeholder="Maths&#10;Physics&#10;Chemistry&#10;English"
                ></textarea>
            </label>

            <button
                class="primary-btn"
                id="scheduleGenerate"
            >
                Generate Study Schedule
            </button>

            <div
                class="result-box"
                id="scheduleResult"
            >
                Enter your subjects to generate a schedule.
            </div>

        </div>
    `;

    document
        .getElementById("scheduleGenerate")
        .addEventListener("click", () => {

            const subjects =
                Number(
                    document.getElementById(
                        "scheduleSubjects"
                    ).value
                );

            const hours =
                Number(
                    document.getElementById(
                        "scheduleHours"
                    ).value
                );

            const breakMinutes =
                Number(
                    document.getElementById(
                        "scheduleBreak"
                    ).value
                );

            const names =
                document.getElementById(
                    "scheduleNames"
                ).value
                    .split("\n")
                    .map(
                        name =>
                            name.trim()
                    )
                    .filter(Boolean);

            const result =
                document.getElementById(
                    "scheduleResult"
                );

            if (
                !Number.isFinite(subjects) ||
                !Number.isFinite(hours) ||
                !Number.isFinite(breakMinutes) ||
                subjects <= 0 ||
                hours <= 0 ||
                breakMinutes < 0
            ) {
                result.innerHTML =
                    "⚠️ Please enter valid values.";
                return;
            }

            if (names.length === 0) {

                result.innerHTML =
                    "⚠️ Please enter at least one subject.";

                return;
            }

            const selectedSubjects =
                names.slice(
                    0,
                    subjects
                );

            const totalMinutes =
                hours * 60;

            const breaks =
                Math.max(
                    selectedSubjects.length - 1,
                    0
                ) * breakMinutes;

            const studyMinutes =
                totalMinutes - breaks;

            if (studyMinutes <= 0) {

                result.innerHTML =
                    "⚠️ Not enough time after breaks.";

                return;
            }

            const perSubject =
                studyMinutes /
                selectedSubjects.length;

            let currentMinute = 0;

            let html = `
                <strong>📚 Your Study Schedule</strong>

                <div class="schedule-list">
            `;

            selectedSubjects.forEach(
                (subject, index) => {

                    const start =
                        formatScheduleTime(
                            currentMinute
                        );

                    currentMinute +=
                        perSubject;

                    const end =
                        formatScheduleTime(
                            currentMinute
                        );

                    html += `
                        <div class="schedule-item">
                            <strong>
                                ${escapeHTML(subject)}
                            </strong>

                            <span>
                                ${start} → ${end}
                            </span>
                        </div>
                    `;

                    if (
                        index <
                        selectedSubjects.length - 1
                    ) {
                        currentMinute +=
                            breakMinutes;
                    }
                }
            );

            html += `
                </div>

                <p>
                    💡 Take short breaks and adjust
                    the schedule according to your needs.
                </p>
            `;

            result.innerHTML = html;
        });
}


/* =========================================================
   SCHEDULE TIME FORMATTER
   ========================================================= */

function formatScheduleTime(minutes) {

    const total =
        Math.round(minutes);

    const hours =
        Math.floor(total / 60);

    const mins =
        total % 60;

    const displayHour =
        hours % 12 || 12;

    const period =
        hours >= 12
            ? "PM"
            : "AM";

    return `
        ${displayHour}:
        ${String(mins).padStart(2, "0")}
        ${period}
    `;
}
/* =========================================================
   PHASE 5 — MATH & CALCULATION TOOLS
   ========================================================= */


/* =========================================================
   LCM CALCULATOR
   ========================================================= */

function renderLCMCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Enter Numbers
                <textarea
                    id="lcmNumbers"
                    rows="4"
                    placeholder="Example: 12, 18, 24"
                ></textarea>
            </label>

            <button
                class="primary-btn"
                id="lcmCalculate"
            >
                Calculate LCM
            </button>

            <div
                class="result-box"
                id="lcmResult"
            >
                Enter two or more numbers.
            </div>

        </div>
    `;

    document
        .getElementById("lcmCalculate")
        .addEventListener("click", () => {

            const input =
                document.getElementById(
                    "lcmNumbers"
                ).value;

            const numbers =
                input
                    .split(/[\s,]+/)
                    .map(Number)
                    .filter(
                        n =>
                            Number.isFinite(n) &&
                            Number.isInteger(n) &&
                            n !== 0
                    )
                    .map(Math.abs);

            const result =
                document.getElementById(
                    "lcmResult"
                );

            if (numbers.length < 2) {

                result.innerHTML =
                    "⚠️ Please enter at least two valid numbers.";

                return;
            }

            const gcd = (a, b) => {

                while (b !== 0) {

                    const temp = b;

                    b = a % b;

                    a = temp;
                }

                return Math.abs(a);
            };

            const lcm = (a, b) => {

                return Math.abs(
                    (a / gcd(a, b)) * b
                );
            };

            let answer =
                numbers[0];

            for (
                let i = 1;
                i < numbers.length;
                i++
            ) {
                answer =
                    lcm(
                        answer,
                        numbers[i]
                    );
            }

            result.innerHTML = `
                <strong>LCM</strong>

                <div class="result-value">
                    ${formatNumber(answer)}
                </div>

                <p>
                    Numbers:
                    ${numbers.join(", ")}
                </p>
            `;
        });
}


/* =========================================================
   HCF / GCD CALCULATOR
   ========================================================= */

function renderHCFCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Enter Numbers
                <textarea
                    id="hcfNumbers"
                    rows="4"
                    placeholder="Example: 24, 36, 48"
                ></textarea>
            </label>

            <button
                class="primary-btn"
                id="hcfCalculate"
            >
                Calculate HCF
            </button>

            <div
                class="result-box"
                id="hcfResult"
            >
                Enter two or more numbers.
            </div>

        </div>
    `;

    document
        .getElementById("hcfCalculate")
        .addEventListener("click", () => {

            const input =
                document.getElementById(
                    "hcfNumbers"
                ).value;

            const numbers =
                input
                    .split(/[\s,]+/)
                    .map(Number)
                    .filter(
                        n =>
                            Number.isFinite(n) &&
                            Number.isInteger(n)
                    )
                    .map(Math.abs);

            const result =
                document.getElementById(
                    "hcfResult"
                );

            if (numbers.length < 2) {

                result.innerHTML =
                    "⚠️ Please enter at least two valid numbers.";

                return;
            }

            const gcd = (a, b) => {

                while (b !== 0) {

                    const temp = b;

                    b = a % b;

                    a = temp;
                }

                return Math.abs(a);
            };

            let answer =
                numbers[0];

            for (
                let i = 1;
                i < numbers.length;
                i++
            ) {
                answer =
                    gcd(
                        answer,
                        numbers[i]
                    );
            }

            result.innerHTML = `
                <strong>HCF / GCD</strong>

                <div class="result-value">
                    ${formatNumber(answer)}
                </div>

                <p>
                    Numbers:
                    ${numbers.join(", ")}
                </p>
            `;
        });
}


/* =========================================================
   PRIME NUMBER CHECKER
   ========================================================= */

function renderPrimeChecker(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Enter Number
                <input
                    type="number"
                    id="primeNumber"
                    placeholder="Example: 97"
                    min="0"
                    step="1"
                >
            </label>

            <button
                class="primary-btn"
                id="primeCheck"
            >
                Check Number
            </button>

            <div
                class="result-box"
                id="primeResult"
            >
                Enter a number.
            </div>

        </div>
    `;

    document
        .getElementById("primeCheck")
        .addEventListener("click", () => {

            const number =
                Number(
                    document.getElementById(
                        "primeNumber"
                    ).value
                );

            const result =
                document.getElementById(
                    "primeResult"
                );

            if (
                !Number.isInteger(number) ||
                number < 0
            ) {
                result.innerHTML =
                    "⚠️ Please enter a positive whole number.";

                return;
            }

            if (number < 2) {

                result.innerHTML = `
                    <strong>${number}</strong>
                    is not a prime number.
                `;

                return;
            }

            let isPrime = true;

            for (
                let i = 2;
                i <= Math.sqrt(number);
                i++
            ) {

                if (number % i === 0) {

                    isPrime = false;

                    break;
                }
            }

            if (isPrime) {

                result.innerHTML = `
                    <strong>✅ ${number}</strong>

                    <div class="result-value">
                        Prime Number
                    </div>
                `;

            } else {

                result.innerHTML = `
                    <strong>❌ ${number}</strong>

                    <div class="result-value">
                        Not Prime
                    </div>
                `;
            }
        });
}


/* =========================================================
   FACTORIAL CALCULATOR
   ========================================================= */

function renderFactorialCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Enter Number
                <input
                    type="number"
                    id="factorialNumber"
                    placeholder="Example: 5"
                    min="0"
                    max="170"
                    step="1"
                >
            </label>

            <button
                class="primary-btn"
                id="factorialCalculate"
            >
                Calculate Factorial
            </button>

            <div
                class="result-box"
                id="factorialResult"
            >
                Enter a whole number.
            </div>

        </div>
    `;

    document
        .getElementById("factorialCalculate")
        .addEventListener("click", () => {

            const number =
                Number(
                    document.getElementById(
                        "factorialNumber"
                    ).value
                );

            const result =
                document.getElementById(
                    "factorialResult"
                );

            if (
                !Number.isInteger(number) ||
                number < 0 ||
                number > 170
            ) {
                result.innerHTML =
                    "⚠️ Enter a whole number from 0 to 170.";

                return;
            }

            let factorial = 1;

            for (
                let i = 2;
                i <= number;
                i++
            ) {
                factorial *= i;
            }

            result.innerHTML = `
                <strong>${number}! =</strong>

                <div
                    class="result-value"
                    style="word-break:break-all;"
                >
                    ${factorial.toLocaleString(
                        "en-US"
                    )}
                </div>
            `;
        });
}


/* =========================================================
   AREA CALCULATOR
   ========================================================= */

function renderAreaCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Shape
                <select id="areaShape">

                    <option value="rectangle">
                        Rectangle
                    </option>

                    <option value="square">
                        Square
                    </option>

                    <option value="triangle">
                        Triangle
                    </option>

                    <option value="circle">
                        Circle
                    </option>

                </select>
            </label>

            <div id="areaInputs"></div>

            <button
                class="primary-btn"
                id="areaCalculate"
            >
                Calculate Area
            </button>

            <div
                class="result-box"
                id="areaResult"
            >
                Select a shape and enter dimensions.
            </div>

        </div>
    `;

    const shape =
        document.getElementById(
            "areaShape"
        );

    const inputs =
        document.getElementById(
            "areaInputs"
        );

    const result =
        document.getElementById(
            "areaResult"
        );

    function renderInputs() {

        const value =
            shape.value;

        if (value === "rectangle") {

            inputs.innerHTML = `
                <label>
                    Length
                    <input
                        type="number"
                        id="areaLength"
                        min="0"
                        step="any"
                        placeholder="Example: 10"
                    >
                </label>

                <label>
                    Width
                    <input
                        type="number"
                        id="areaWidth"
                        min="0"
                        step="any"
                        placeholder="Example: 5"
                    >
                </label>
            `;

        } else if (value === "square") {

            inputs.innerHTML = `
                <label>
                    Side
                    <input
                        type="number"
                        id="areaSide"
                        min="0"
                        step="any"
                        placeholder="Example: 5"
                    >
                </label>
            `;

        } else if (value === "triangle") {

            inputs.innerHTML = `
                <label>
                    Base
                    <input
                        type="number"
                        id="areaBase"
                        min="0"
                        step="any"
                        placeholder="Example: 10"
                    >
                </label>

                <label>
                    Height
                    <input
                        type="number"
                        id="areaHeight"
                        min="0"
                        step="any"
                        placeholder="Example: 6"
                    >
                </label>
            `;

        } else {

            inputs.innerHTML = `
                <label>
                    Radius
                    <input
                        type="number"
                        id="areaRadius"
                        min="0"
                        step="any"
                        placeholder="Example: 7"
                    >
                </label>
            `;
        }
    }

    renderInputs();

    shape.addEventListener(
        "change",
        renderInputs
    );

    document
        .getElementById("areaCalculate")
        .addEventListener("click", () => {

            let area = 0;

            let shapeName =
                shape.options[
                    shape.selectedIndex
                ].text;

            if (
                shape.value ===
                "rectangle"
            ) {

                const length =
                    Number(
                        document.getElementById(
                            "areaLength"
                        ).value
                    );

                const width =
                    Number(
                        document.getElementById(
                            "areaWidth"
                        ).value
                    );

                if (
                    !Number.isFinite(length) ||
                    !Number.isFinite(width) ||
                    length <= 0 ||
                    width <= 0
                ) {
                    result.innerHTML =
                        "⚠️ Enter valid dimensions.";

                    return;
                }

                area =
                    length * width;

            } else if (
                shape.value ===
                "square"
            ) {

                const side =
                    Number(
                        document.getElementById(
                            "areaSide"
                        ).value
                    );

                if (
                    !Number.isFinite(side) ||
                    side <= 0
                ) {
                    result.innerHTML =
                        "⚠️ Enter a valid side.";

                    return;
                }

                area =
                    side * side;

            } else if (
                shape.value ===
                "triangle"
            ) {

                const base =
                    Number(
                        document.getElementById(
                            "areaBase"
                        ).value
                    );

                const height =
                    Number(
                        document.getElementById(
                            "areaHeight"
                        ).value
                    );

                if (
                    !Number.isFinite(base) ||
                    !Number.isFinite(height) ||
                    base <= 0 ||
                    height <= 0
                ) {
                    result.innerHTML =
                        "⚠️ Enter valid dimensions.";

                    return;
                }

                area =
                    0.5 *
                    base *
                    height;

            } else {

                const radius =
                    Number(
                        document.getElementById(
                            "areaRadius"
                        ).value
                    );

                if (
                    !Number.isFinite(radius) ||
                    radius <= 0
                ) {
                    result.innerHTML =
                        "⚠️ Enter a valid radius.";

                    return;
                }

                area =
                    Math.PI *
                    radius *
                    radius;
            }

            result.innerHTML = `
                <strong>${shapeName} Area</strong>

                <div class="result-value">
                    ${formatNumber(area)}
                </div>

                <p>
                    Square units
                </p>
            `;
        });
}


/* =========================================================
   VOLUME CALCULATOR
   ========================================================= */

function renderVolumeCalculator(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Shape
                <select id="volumeShape">

                    <option value="cube">
                        Cube
                    </option>

                    <option value="cuboid">
                        Cuboid
                    </option>

                    <option value="cylinder">
                        Cylinder
                    </option>

                    <option value="sphere">
                        Sphere
                    </option>

                </select>
            </label>

            <div id="volumeInputs"></div>

            <button
                class="primary-btn"
                id="volumeCalculate"
            >
                Calculate Volume
            </button>

            <div
                class="result-box"
                id="volumeResult"
            >
                Select a shape and enter dimensions.
            </div>

        </div>
    `;

    const shape =
        document.getElementById(
            "volumeShape"
        );

    const inputs =
        document.getElementById(
            "volumeInputs"
        );

    const result =
        document.getElementById(
            "volumeResult"
        );

    function renderInputs() {

        if (shape.value === "cube") {

            inputs.innerHTML = `
                <label>
                    Side
                    <input
                        type="number"
                        id="volumeSide"
                        min="0"
                        step="any"
                        placeholder="Example: 5"
                    >
                </label>
            `;

        } else if (
            shape.value === "cuboid"
        ) {

            inputs.innerHTML = `
                <label>
                    Length
                    <input
                        type="number"
                        id="volumeLength"
                        min="0"
                        step="any"
                    >
                </label>

                <label>
                    Width
                    <input
                        type="number"
                        id="volumeWidth"
                        min="0"
                        step="any"
                    >
                </label>

                <label>
                    Height
                    <input
                        type="number"
                        id="volumeHeight"
                        min="0"
                        step="any"
                    >
                </label>
            `;

        } else if (
            shape.value === "cylinder"
        ) {

            inputs.innerHTML = `
                <label>
                    Radius
                    <input
                        type="number"
                        id="volumeRadius"
                        min="0"
                        step="any"
                    >
                </label>

                <label>
                    Height
                    <input
                        type="number"
                        id="volumeCylinderHeight"
                        min="0"
                        step="any"
                    >
                </label>
            `;

        } else {

            inputs.innerHTML = `
                <label>
                    Radius
                    <input
                        type="number"
                        id="volumeSphereRadius"
                        min="0"
                        step="any"
                    >
                </label>
            `;
        }
    }

    renderInputs();

    shape.addEventListener(
        "change",
        renderInputs
    );

    document
        .getElementById("volumeCalculate")
        .addEventListener("click", () => {

            let volume = 0;

            if (
                shape.value ===
                "cube"
            ) {

                const side =
                    Number(
                        document.getElementById(
                            "volumeSide"
                        ).value
                    );

                if (
                    !Number.isFinite(side) ||
                    side <= 0
                ) {
                    result.innerHTML =
                        "⚠️ Enter a valid side.";

                    return;
                }

                volume =
                    side ** 3;

            } else if (
                shape.value ===
                "cuboid"
            ) {

                const length =
                    Number(
                        document.getElementById(
                            "volumeLength"
                        ).value
                    );

                const width =
                    Number(
                        document.getElementById(
                            "volumeWidth"
                        ).value
                    );

                const height =
                    Number(
                        document.getElementById(
                            "volumeHeight"
                        ).value
                    );

                if (
                    !Number.isFinite(length) ||
                    !Number.isFinite(width) ||
                    !Number.isFinite(height) ||
                    length <= 0 ||
                    width <= 0 ||
                    height <= 0
                ) {
                    result.innerHTML =
                        "⚠️ Enter valid dimensions.";

                    return;
                }

                volume =
                    length *
                    width *
                    height;

            } else if (
                shape.value ===
                "cylinder"
            ) {

                const radius =
                    Number(
                        document.getElementById(
                            "volumeRadius"
                        ).value
                    );

                const height =
                    Number(
                        document.getElementById(
                            "volumeCylinderHeight"
                        ).value
                    );

                if (
                    !Number.isFinite(radius) ||
                    !Number.isFinite(height) ||
                    radius <= 0 ||
                    height <= 0
                ) {
                    result.innerHTML =
                        "⚠️ Enter valid dimensions.";

                    return;
                }

                volume =
                    Math.PI *
                    radius *
                    radius *
                    height;

            } else {

                const radius =
                    Number(
                        document.getElementById(
                            "volumeSphereRadius"
                        ).value
                    );

                if (
                    !Number.isFinite(radius) ||
                    radius <= 0
                ) {
                    result.innerHTML =
                        "⚠️ Enter a valid radius.";

                    return;
                }

                volume =
                    (4 / 3) *
                    Math.PI *
                    radius ** 3;
            }

            result.innerHTML = `
                <strong>Volume</strong>

                <div class="result-value">
                    ${formatNumber(volume)}
                </div>

                <p>
                    Cubic units
                </p>
            `;
        });
}


/* =========================================================
   NUMBER SYSTEM CONVERTER
   ========================================================= */

function renderNumberSystem(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                Convert From
                <select id="numberSystemFrom">

                    <option value="10">
                        Decimal
                    </option>

                    <option value="2">
                        Binary
                    </option>

                    <option value="8">
                        Octal
                    </option>

                    <option value="16">
                        Hexadecimal
                    </option>

                </select>
            </label>

            <label>
                Number
                <input
                    type="text"
                    id="numberSystemInput"
                    placeholder="Example: 255"
                >
            </label>

            <button
                class="primary-btn"
                id="numberSystemConvert"
            >
                Convert
            </button>

            <div
                class="result-box"
                id="numberSystemResult"
            >
                Enter a number to convert.
            </div>

        </div>
    `;

    document
        .getElementById(
            "numberSystemConvert"
        )
        .addEventListener(
            "click",
            () => {

                const base =
                    Number(
                        document.getElementById(
                            "numberSystemFrom"
                        ).value
                    );

                const input =
                    document.getElementById(
                        "numberSystemInput"
                    ).value
                        .trim()
                        .toUpperCase();

                const result =
                    document.getElementById(
                        "numberSystemResult"
                    );

                if (!input) {

                    result.innerHTML =
                        "⚠️ Enter a number.";

                    return;
                }

                const decimal =
                    parseInt(
                        input,
                        base
                    );

                if (
                    !Number.isFinite(decimal) ||
                    decimal < 0 ||
                    !Number.isInteger(decimal)
                ) {

                    result.innerHTML =
                        "⚠️ Invalid number for the selected number system.";

                    return;
                }

                result.innerHTML = `
                    <strong>Converted Values</strong>

                    <div class="result-value">
                        Decimal:
                        ${decimal.toString(10)}
                    </div>

                    <p>
                        Binary:
                        <strong>
                            ${decimal.toString(2).toUpperCase()}
                        </strong>
                    </p>

                    <p>
                        Octal:
                        <strong>
                            ${decimal.toString(8).toUpperCase()}
                        </strong>
                    </p>

                    <p>
                        Hexadecimal:
                        <strong>
                            ${decimal.toString(16).toUpperCase()}
                        </strong>
                    </p>
                `;
            }
        );
}


/* =========================================================
   RATIO & PROPORTION CALCULATOR
   ========================================================= */

function renderRatioProportion(container) {

    container.innerHTML = `
        <div class="tool-form">

            <label>
                First Ratio — A
                <input
                    type="number"
                    id="ratioA"
                    placeholder="Example: 2"
                    step="any"
                >
            </label>

            <label>
                First Ratio — B
                <input
                    type="number"
                    id="ratioB"
                    placeholder="Example: 3"
                    step="any"
                >
            </label>

            <label>
                Second Ratio — C
                <input
                    type="number"
                    id="ratioC"
                    placeholder="Example: 4"
                    step="any"
                >
            </label>

            <button
                class="primary-btn"
                id="ratioCalculate"
            >
                Solve Proportion
            </button>

            <div
                class="result-box"
                id="ratioResult"
            >
                Example: 2 : 3 = 4 : X
            </div>

        </div>
    `;

    document
        .getElementById(
            "ratioCalculate"
        )
        .addEventListener(
            "click",
            () => {

                const a =
                    Number(
                        document.getElementById(
                            "ratioA"
                        ).value
                    );

                const b =
                    Number(
                        document.getElementById(
                            "ratioB"
                        ).value
                    );

                const c =
                    Number(
                        document.getElementById(
                            "ratioC"
                        ).value
                    );

                const result =
                    document.getElementById(
                        "ratioResult"
                    );

                if (
                    !Number.isFinite(a) ||
                    !Number.isFinite(b) ||
                    !Number.isFinite(c) ||
                    a === 0 ||
                    b === 0
                ) {

                    result.innerHTML =
                        "⚠️ Enter valid non-zero values.";

                    return;
                }

                const x =
                    (b * c) / a;

                const gcd = (
                    x,
                    y
                ) => {

                    x = Math.abs(x);
                    y = Math.abs(y);

                    while (y) {

                        const temp = y;

                        y = x % y;

                        x = temp;
                    }

                    return x;
                };

                const ratioGcd =
                    gcd(a, b);

                const simplifiedA =
                    a / ratioGcd;

                const simplifiedB =
                    b / ratioGcd;

                result.innerHTML = `
                    <strong>Proportion Result</strong>

                    <div class="result-value">
                        X = ${formatNumber(x)}
                    </div>

                    <p>
                        ${a} : ${b}
                        =
                        ${c} : ${formatNumber(x)}
                    </p>

                    <p>
                        Simplified first ratio:
                        <strong>
                            ${formatNumber(simplifiedA)}
                            :
                            ${formatNumber(simplifiedB)}
                        </strong>
                    </p>
                `;
            }
        );
}

/* =========================================================
   PWA
   ========================================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register("./sw.js")
                .then(() => {

                    console.log(
                        "UtilityBox PWA ready"
                    );

                })
                .catch(error => {

                    console.error(
                        "UtilityBox PWA registration failed:",
                        error
                    );

                });

        }
    );

}

function getAnalyticsSummary() {
    const analytics = getAnalytics();

    const tools = analytics.tools || {};
    const events = Array.isArray(analytics.events)
        ? analytics.events
        : [];

    const toolEntries = Object.values(tools);

    const totalUses = toolEntries.reduce(
        (total, tool) => {
            return total + (Number(tool.uses) || 0);
        },
        0
    );

    const searches = events.filter(
        event => event.event === "search"
    );

    const categories = {};

    toolEntries.forEach(tool => {
        const category = tool.category || "Other";

        categories[category] =
            (categories[category] || 0) +
            (Number(tool.uses) || 0);
    });

    const lastEvent = events.length
        ? events[events.length - 1]
        : null;

    return {
        totalUses,
        totalSearches: searches.length,
        uniqueTools: toolEntries.length,
        categories: Object.keys(categories).length,
        topTools: toolEntries
            .sort(
                (a, b) =>
                    (Number(b.uses) || 0) -
                    (Number(a.uses) || 0)
            )
            .slice(0, 10),
        categoryUsage: Object.entries(categories)
            .sort((a, b) => b[1] - a[1]),
        lastActivity: lastEvent?.timestamp || null
    };
}

function renderAnalyticsDashboard() {
    const totalUses =
        document.getElementById("analyticsTotalUses");

    const totalSearches =
        document.getElementById("analyticsTotalSearches");

    const uniqueTools =
        document.getElementById("analyticsUniqueTools");

    const categories =
        document.getElementById("analyticsCategories");

    const topToolsList =
        document.getElementById("topToolsList");

    const categoryUsageList =
        document.getElementById("categoryUsageList");

    const lastActivity =
        document.getElementById("analyticsLastActivity");

    if (
        !totalUses ||
        !totalSearches ||
        !uniqueTools ||
        !categories ||
        !topToolsList ||
        !categoryUsageList ||
        !lastActivity
    ) {
        return;
    }

    const summary = getAnalyticsSummary();

    totalUses.textContent = summary.totalUses;
    totalSearches.textContent = summary.totalSearches;
    uniqueTools.textContent = summary.uniqueTools;
    categories.textContent = summary.categories;

    if (!summary.topTools.length) {
        topToolsList.innerHTML = `
            <p class="analytics-empty">
                No tool usage recorded yet.
            </p>
        `;
    } else {
        const maxUses = Math.max(
            ...summary.topTools.map(
                tool => Number(tool.uses) || 0
            ),
            1
        );

        topToolsList.innerHTML =
            summary.topTools
                .map((tool, index) => {
                    const uses = Number(tool.uses) || 0;
                    const width = Math.max(
                        (uses / maxUses) * 100,
                        4
                    );

                    return `
                        <div class="analytics-row">
                            <div class="analytics-row-top">
                                <span>
                                    <b>${index + 1}.</b>
                                    ${escapeHTML(
                                        tool.name || tool.id
                                    )}
                                </span>

                                <strong>${uses}</strong>
                            </div>

                            <div class="analytics-progress">
                                <span
                                    style="width:${width}%"
                                ></span>
                            </div>

                            <small>
                                ${escapeHTML(
                                    tool.category || "Other"
                                )}
                            </small>
                        </div>
                    `;
                })
                .join("");
    }

    if (!summary.categoryUsage.length) {
        categoryUsageList.innerHTML = `
            <p class="analytics-empty">
                No category usage recorded yet.
            </p>
        `;
    } else {
        const maxCategoryUses = Math.max(
            ...summary.categoryUsage.map(
                item => Number(item[1]) || 0
            ),
            1
        );

        categoryUsageList.innerHTML =
            summary.categoryUsage
                .map(([category, uses]) => {
                    const width = Math.max(
                        (uses / maxCategoryUses) * 100,
                        4
                    );

                    return `
                        <div class="analytics-row">
                            <div class="analytics-row-top">
                                <span>
                                    ${escapeHTML(category)}
                                </span>

                                <strong>${uses}</strong>
                            </div>

                            <div class="analytics-progress">
                                <span
                                    style="width:${width}%"
                                ></span>
                            </div>
                        </div>
                    `;
                })
                .join("");
    }

    if (summary.lastActivity) {
        const date = new Date(
            summary.lastActivity
        );

        lastActivity.textContent =
            date.toLocaleString();
    } else {
        lastActivity.textContent =
            "No activity yet";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const refreshBtn =
        document.getElementById(
            "refreshAnalyticsBtn"
        );

    const clearBtn =
        document.getElementById(
            "clearAnalyticsBtn"
        );

    refreshBtn?.addEventListener(
        "click",
        () => {
            renderAnalyticsDashboard();
            showToast("Analytics refreshed");
        }
    );

    clearBtn?.addEventListener(
        "click",
        () => {

            const confirmed =
                window.confirm(
                    "Clear all UtilityBox analytics data from this device?"
                );

            if (!confirmed) return;

            try {
                localStorage.removeItem(
                    ANALYTICS_KEY
                );

                renderAnalyticsDashboard();

                showToast(
                    "Analytics data cleared"
                );
            } catch (error) {
                console.error(
                    "Analytics clear failed:",
                    error
                );
            }
        }
    );

    renderAnalyticsDashboard();
});

