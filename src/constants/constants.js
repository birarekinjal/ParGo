const constants = {
  loginPage: {
    title: "Account Login",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    rememberMePlaceholder: "Remember Me",
    buttons: {
      login: "Login",
    },
  },
  dashboard: {
    companiesTitle: "List of Companies",
    newEntityTitle: "List of New Companies",
    suspendedEntityTitle: "List of Suspended Companies",
    searchPlaceholder: "Find by Name",
    tabTitles: ["Companies", "New Companies", "Suspended Companies"],
    cardLabels: ["Companies", "URLs", "Data Points", "New Companies"],
    newEntityHeaders: [
      { label: "No." },
      { label: "Company" },
      { label: "Action" },
    ],
    pageText: "Company List",
    buttons: {
      update: "Update",
    },
    dropdownOptions: [
      { value: "All", key: "all" },
      { value: "Startup", key: "startup" },
      { value: "Investor", key: "investor" },
      { value: "Accelerator", key: "accelerator" },
    ],
  },
  addNewUser: {
    title: "Add User Details",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    adminPlaceholder: "Admin",
    confirmPasswordPlaceholder: "Confirm Password",
    buttons: {
      addUser: "Save Details",
    },
  },
  editUser: {
    title: "Edit User Details",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    adminPlaceholder: "Admin",
    confirmPasswordPlaceholder: "Confirm Password",
    buttons: {
      editUser: "Save Details",
    },
  },
  addCreatorPlaceholder: {
    namePlaceholder: "Enter Name",
    bioPlaceholder: "Enter Bio here...",
    contactNoPlaceholder: "Enter Contact Number",
    locationPlaceholder: "Enter Location",
    occuptionPlaceholder: "Enter Occuption",
    websitePlaceholder: "Enter Website ",
    experiencePlaceholder: "Enter your experience",
    passionPlaceholder: "Enter your passion",
  },
  profile: {
    title: "Edit Profile",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Email",
    adminPlaceholder: "Admin",
    changePasswordPlaceholder: "Change Password?",
    buttons: {
      update: "Update",
    },
    changePasswordModal: {
      title: "Change Password",
      oldPasswordPlaceholder: "Old Password",
      newPasswordPlaceholder: "New Password",
      confirmPasswordPlaceholder: "Confirm Password",
      footerButtons: {
        cancel: "Cancel",
        change: "Change",
      },
    },
  },
  manageUsers: {
    title: "List of Creators",
    pageText: "User List",
    searchText: "Find by Name or Email",
    adminPlaceholder: "Admin",
    userPlaceholder: "User",
    headers: [
      { label: "No." },
      { label: "Name", className: "sorting" },
      { label: "Bio" },
      { label: "Contact No" },
      { label: "Location" },
      { label: "Occuption" },
      { label: "Passion" },
    ],
    buttons: {
      add: "Creator",
    },
  },
  manageAficionado: {
    title: "List of Aficionado",
    pageText: "User List",
    searchText: "Find by Name or Email",
    adminPlaceholder: "Admin",
    userPlaceholder: "User",
    headers: [
      { label: "No." },
      { label: "Name", className: "sorting" },
      { label: "Bio" },
      { label: "Contact No" },
      { label: "Location" },
      { label: "Occuption" },
      { label: "Passion" },
    ],
    buttons: {
      add: "Aficionado",
    },
  },
  companyTable: {
    pageText: "Company List",
    buttons: {
      update: "Update",
    },
    headers: [
      { label: "No." },
      { label: "Company", className: "sorting" },
      { label: "Sector" },
      { label: "Funding Stage" },
      { label: "UEN" },
      { label: "Updated On" },
      { label: "View" },
    ],
  },
  confirmationModal: {
    footerButtons: {
      cancel: "Cancel",
      delete: "Delete",
    },
  },
  pagination: {
    pagePlaceholder: "Page",
    ofPlaceholder: "of",
  },
  header: {
    profilePlaceholder: "Manage Profile",
    logOutPlaceholder: "Log Out",
  },
  sidebar: {
    dashboardPlaceholder: "Dashboard",
    addUserPlaceholder: "Add User",
    manageUsersPlaceholder: "Manage Users",
    createrPlaceHolder: "Creater Management",
    AficionadoPlaceHolder: "Create Aficionado",
    InvitationPlaceholder: "Invitation",
  },
  tooltips: {
    exampleTooltip: "Example Tooltip",
  },
  creater: {},
};
export default constants;
