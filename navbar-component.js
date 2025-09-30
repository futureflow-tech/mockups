// Self-contained Navbar Component
// This includes both HTML and CSS, no external file fetching required

class NavbarComponent {
    constructor() {
        this.isUserMenuOpen = false;
        this.isMobileMenuOpen = false;
    }

    // Add navbar CSS to the page
    addNavbarStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .navbar-scrolled {
                background: rgba(255, 255, 255, 0.9);
                backdrop-filter: blur(12px);
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            
            .navbar-default {
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(12px);
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            
            .logo-gradient {
                background: linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%);
            }
            
            .nav-link {
                transition: all 0.2s ease;
            }
            
            .nav-link:hover {
                transform: translateY(-1px);
            }
            
            .nav-link.active {
                background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                color: #1d4ed8;
            }
            
            .dropdown-menu {
                animation: fadeInDown 0.2s ease-out;
            }
            
            @keyframes fadeInDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .mobile-menu {
                transition: all 0.3s ease-in-out;
            }
            
            .mobile-menu.open {
                max-height: 100vh;
                opacity: 1;
            }
            
            .mobile-menu.closed {
                max-height: 0;
                opacity: 0;
            }
            
            .user-avatar {
                background: linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%);
                box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
            }
            
            .notification-badge {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            .search-input:focus {
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                border-color: #3b82f6;
            }
        `;
        document.head.appendChild(style);
    }

    // Check if current page is an authentication page
    isAuthPage() {
        const currentPage = window.location.pathname.split('/').pop();
        const authPages = ['login.html', 'registration.html', 'otp-verification.html'];
        return authPages.includes(currentPage);
    }

    // Generate navbar HTML
    generateNavbarHTML() {
        const isAuth = this.isAuthPage();
        
        return `
            <nav id="navbar" class="fixed w-full z-50 navbar-default transition-all duration-300">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <!-- Left side: Logo and Navigation -->
                        <div class="flex items-center space-x-8">
                            <!-- Logo -->
                            <div class="flex-shrink-0 flex items-center">
                                <a href="${isAuth ? './login.html' : './question-sets.html'}" class="flex items-center group">
                                    <div class="relative flex items-center justify-center h-10 w-10 mr-3 overflow-hidden rounded-md logo-gradient transition-transform duration-300 group-hover:scale-105 shadow-lg">
                                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex text-lg font-bold text-gray-900 leading-tight">
                                            <span class="text-gray-900">Feedback</span>
                                            <span class="text-blue-600 ml-0.5">AI</span>
                                        </div>
                                        <span class="text-xs text-gray-500 -mt-1">AI Assessment Platform</span>
                                    </div>
                                </a>
                            </div>

                            <!-- Desktop Navigation (only show for non-auth pages) -->
                            ${!isAuth ? `
                            <div class="hidden md:flex items-center space-x-1">
                                <!-- Admin -->
                                <a href="./admin.html" class="nav-link flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50">
                                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Admin
                                </a>

                                <!-- Organisation -->
                                <a href="./org-admin-settings.html" class="nav-link flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50">
                                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                    </svg>
                                    Organisation
                                </a>

                                <!-- Test Results -->
                                <a href="./test-results.html" class="nav-link flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50">
                                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                    </svg>
                                    Test Results
                                </a>

                                <!-- Question Sets -->
                                <a href="./question-sets.html" class="nav-link flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50">
                                    <svg class="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Question Sets
                                </a>
                            </div>
                            ` : ''}
                        </div>

                        <!-- Right side: Login Button or User Menu -->
                        <div class="hidden md:flex items-center space-x-3">
                            ${isAuth ? `
                            <!-- Login Button for auth pages -->
                            <a href="./login.html" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Login
                            </a>
                            ` : `
                            <!-- User Menu for authenticated pages -->
                            <div class="relative" id="userMenuRef">
                                <button onclick="navbarComponent.toggleUserMenu()" class="flex items-center space-x-2 focus:outline-none">
                                    <div class="relative h-8 w-8 rounded-full user-avatar flex items-center justify-center text-white font-semibold border border-blue-400 shadow-sm">
                                        J
                                    </div>
                                    <div class="flex items-center">
                                        <span class="hidden lg:block text-sm font-medium text-gray-700">
                                            John Doe
                                        </span>
                                        <svg class="ml-1 w-4 h-4 text-gray-700 transition-transform duration-200" id="user-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </button>

                                <!-- User Dropdown Menu -->
                                <div id="userDropdown" class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-40 py-1 border border-gray-100 dropdown-menu hidden">
                                    <div class="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">
                                        Signed in as
                                        <span class="font-semibold"> John Doe</span>
                                        <br />
                                        <span class="text-xs text-gray-500">john.doe@example.com</span>
                                    </div>
                                    <a href="/profile" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                                        <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                        Your Profile
                                    </a>
                                    <a href="/settings" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                                        <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        Settings
                                    </a>
                                    <button onclick="navbarComponent.handleLogout()" class="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                                        </svg>
                                        Logout
                                    </button>
                                </div>
                            </div>
                            `}
                        </div>

                        <!-- Mobile menu button (only show for non-auth pages) -->
                        ${!isAuth ? `
                        <div class="md:hidden flex items-center space-x-3">
                            <button onclick="navbarComponent.toggleMobileMenu()" class="p-1.5 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors">
                                <svg id="mobile-menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>
                        ` : ''}
                    </div>
                </div>

                <!-- Mobile menu -->
                <div id="mobileMenu" class="md:hidden overflow-hidden mobile-menu closed bg-white border-t border-gray-200">
                    ${!isAuth ? `
                    <!-- Mobile Navigation Links (only show for non-auth pages) -->
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <a href="./admin.html" class="flex items-center w-full px-4 py-2.5 text-base font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            <svg class="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Admin
                        </a>
                        <a href="./org-admin-settings.html" class="flex items-center w-full px-4 py-2.5 text-base font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            <svg class="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                            Organisation
                        </a>
                        <a href="./test-results.html" class="flex items-center w-full px-4 py-2.5 text-base font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            <svg class="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                            Test Results
                        </a>
                        <a href="./question-sets.html" class="flex items-center w-full px-4 py-2.5 text-base font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            <svg class="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Question Sets
                        </a>
                    </div>

                    <!-- Mobile User Menu -->
                    <div class="pt-4 pb-3 border-t border-gray-200">
                        <div class="flex items-center px-4 py-2">
                            <div class="flex-shrink-0 h-10 w-10 rounded-full user-avatar flex items-center justify-center text-white font-semibold text-lg shadow-sm">
                                J
                            </div>
                            <div class="ml-3">
                                <div class="text-base font-medium text-gray-800">
                                    John Doe
                                </div>
                                <div class="text-sm text-gray-500">
                                    john.doe@example.com
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 space-y-1 px-2">
                            <a href="/profile" class="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                                Your Profile
                            </a>
                            <a href="/settings" class="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                                Settings
                            </a>
                            <button onclick="navbarComponent.handleLogout()" class="block w-full text-left px-4 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md">
                                Logout
                            </button>
                        </div>
                    </div>
                    ` : `
                    <!-- Mobile Login Button for auth pages -->
                    <div class="px-4 py-4">
                        <a href="./login.html" class="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md text-base font-medium text-center transition-colors duration-200">
                            Login
                        </a>
                    </div>
                    `}
                </div>
            </nav>
        `;
    }

    // Load navbar into container
    loadNavbar(containerId = 'navbar-container', topOffset = 0) {
        // Add styles first
        this.addNavbarStyles();
        
        // Get container and add navbar
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.generateNavbarHTML();
            
            // Set position
            const navbar = container.querySelector('#navbar');
            if (navbar) {
                navbar.style.top = `${topOffset}px`;
            }
            
            // Add click outside listeners
            this.addClickOutsideListeners();
        }
    }

    toggleUserMenu() {
        const userDropdown = document.getElementById('userDropdown');
        const userArrow = document.getElementById('user-arrow');
        
        if (this.isUserMenuOpen) {
            userDropdown.classList.add('hidden');
            userArrow.style.transform = 'rotate(0deg)';
            this.isUserMenuOpen = false;
        } else {
            userDropdown.classList.remove('hidden');
            userArrow.style.transform = 'rotate(180deg)';
            this.isUserMenuOpen = true;
        }
    }

    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('mobile-menu-icon');
        
        if (this.isMobileMenuOpen) {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('closed');
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            `;
            this.isMobileMenuOpen = false;
        } else {
            mobileMenu.classList.remove('closed');
            mobileMenu.classList.add('open');
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            `;
            this.isMobileMenuOpen = true;
        }
    }

    handleLogout() {
        window.location.href = './login.html';
    }

    addClickOutsideListeners() {
        document.addEventListener('click', (event) => {
            const userMenuRef = document.getElementById('userMenuRef');
            const mobileMenu = document.getElementById('mobileMenu');
            
            // Close user menu if clicking outside
            if (this.isUserMenuOpen && userMenuRef && !userMenuRef.contains(event.target)) {
                this.toggleUserMenu();
            }
            
            // Close mobile menu if clicking outside
            if (this.isMobileMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && !event.target.closest('button[onclick*="toggleMobileMenu"]')) {
                this.toggleMobileMenu();
            }
        });
    }
}

// Create global instance
let navbarComponent;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    navbarComponent = new NavbarComponent();
    navbarComponent.loadNavbar();
});
