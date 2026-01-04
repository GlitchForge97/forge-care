const defaultConfig = {
background_color: "#0f172a",
surface_color: "#1e293b",
text_color: "#f1f5f9",
primary_action_color: "#3b82f6",
secondary_action_color: "#8b5cf6",
hospital_name: "ForgeCare Medical Center",
hospital_tagline: "Excellence in Healthcare & Innovation",
hero_title: "Your Health, Our Mission",
hero_subtitle: "World-class medical care with compassionate service across Bangladesh",
cta_primary: "Book Appointment",
cta_secondary: "Emergency Services",
unified_email: "glitchfogre97@medicenter.bd",
dhaka_phone: "+880 1712-345678",
chattogram_phone: "+880 1812-345678",
sylhet_phone: "+880 1912-345678",
rajshahi_phone: "+880 1612-345678",
emergency_hotline: "+880 1999-911911",
font_family: "Inter",
font_size: 16
};

const hospitalBranches = [
{ id: 'dhaka', name: 'Dhaka Central Branch', city: 'Dhaka', address: 'House 15, Road 8, Dhanmondi, Dhaka 1205', phone: '+880 1712-345678', email: 'dhaka@medicenter.bd', capacity: 350, services: ['24/7 Emergency', 'ICU', 'NICU', 'CCU', 'Surgery', 'Diagnostics'], established: '2010' },
{ id: 'chattogram', name: 'Chattogram Medical Hub', city: 'Chattogram', address: 'CDA Avenue, Nasirabad, Chattogram 4220', phone: '+880 1812-345678', email: 'chattogram@medicenter.bd', capacity: 280, services: ['Emergency', 'ICU', 'Surgery', 'Maternity', 'Diagnostics'], established: '2012' },
{ id: 'sylhet', name: 'Sylhet Specialty Center', city: 'Sylhet', address: 'Zindabazar, Sylhet 3100', phone: '+880 1912-345678', email: 'sylhet@medicenter.bd', capacity: 200, services: ['Emergency', 'ICU', 'Orthopedics', 'Diagnostics'], established: '2015' },
{ id: 'rajshahi', name: 'Rajshahi Regional Hospital', city: 'Rajshahi', address: 'Shaheb Bazar, Rajshahi 6100', phone: '+880 1612-345678', email: 'rajshahi@medicenter.bd', capacity: 220, services: ['Emergency', 'ICU', 'Surgery', 'Pediatrics'], established: '2014' }
];

const departments = [
{ id: 'cardiology', name: 'Cardiology', icon: 'heart', description: 'Heart & Cardiovascular Care', color: '#ef4444', beds: 45 },
{ id: 'neurology', name: 'Neurology', icon: 'brain', description: 'Brain & Nervous System', color: '#8b5cf6', beds: 38 },
{ id: 'orthopedics', name: 'Orthopedics', icon: 'bone', description: 'Bone & Joint Care', color: '#f59e0b', beds: 52 },
{ id: 'pediatrics', name: 'Pediatrics', icon: 'baby', description: 'Child Healthcare', color: '#10b981', beds: 60 },
{ id: 'gynecology', name: 'Gynecology', icon: 'pregnancy', description: 'Women\'s Health', color: '#ec4899', beds: 55 },
{ id: 'dermatology', name: 'Dermatology', icon: 'skin', description: 'Skin Care & Treatment', color: '#06b6d4', beds: 25 },
{ id: 'ophthalmology', name: 'Ophthalmology', icon: 'eye', description: 'Eye Care & Vision', color: '#14b8a6', beds: 30 },
{ id: 'general', name: 'General Medicine', icon: 'heartbeat', description: 'Primary Healthcare', color: '#3b82f6', beds: 70 }
];

const doctors = [
{ id: 'dr001', name: 'Dr. Ahsan Rahman', department: 'cardiology', qualification: 'MBBS, MD (Cardiology), FACC', experience: 18, branches: ['dhaka', 'chattogram'], fee: 1500, rating: 4.9, specialization: 'Interventional Cardiology', availability: ['Mon', 'Wed', 'Fri'], consultationModes: ['in-person', 'telemedicine'], phone: '+880 1711-111111', email: 'ahsan.rahman@medicenter.bd', languages: ['Bengali', 'English'] },
{ id: 'dr002', name: 'Dr. Farhana Islam', department: 'gynecology', qualification: 'MBBS, FCPS (Gynecology)', experience: 15, branches: ['chattogram', 'sylhet'], fee: 1200, rating: 4.9, specialization: 'High-Risk Pregnancy', availability: ['Tue', 'Thu', 'Sat'], consultationModes: ['in-person', 'telemedicine', 'home-visit'], phone: '+880 1811-222222', email: 'farhana.islam@medicenter.bd', languages: ['Bengali', 'English'] },
{ id: 'dr003', name: 'Dr. Mahmudul Hasan', department: 'orthopedics', qualification: 'MBBS, MS (Orthopedics), FICS', experience: 20, branches: ['sylhet', 'dhaka'], fee: 1400, rating: 4.8, specialization: 'Sports Medicine & Joint Replacement', availability: ['Mon', 'Wed', 'Fri', 'Sat'], consultationModes: ['in-person'], phone: '+880 1911-333333', email: 'mahmudul.hasan@medicenter.bd', languages: ['Bengali', 'English', 'Arabic'] },
{ id: 'dr004', name: 'Dr. Tasneem Chowdhury', department: 'pediatrics', qualification: 'MBBS, DCH, FCPS (Pediatrics)', experience: 12, branches: ['dhaka', 'rajshahi'], fee: 1100, rating: 5.0, specialization: 'Neonatology', availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], consultationModes: ['in-person', 'telemedicine'], phone: '+880 1711-444444', email: 'tasneem.chowdhury@medicenter.bd', languages: ['Bengali', 'English'] },
{ id: 'dr005', name: 'Dr. Rafiqul Islam', department: 'neurology', qualification: 'MBBS, MD (Neurology), MRCP', experience: 16, branches: ['dhaka'], fee: 1800, rating: 4.8, specialization: 'Stroke & Epilepsy', availability: ['Tue', 'Thu', 'Sat'], consultationModes: ['in-person', 'telemedicine'], phone: '+880 1711-555555', email: 'rafiqul.islam@medicenter.bd', languages: ['Bengali', 'English', 'Hindi'] }
];

const timeSlots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];
const consultationTypes = [
{ id: 'first-visit', name: 'First Visit Consultation', duration: 45, icon: 'stethoscope' },
{ id: 'follow-up', name: 'Follow-up Visit', duration: 30, icon: 'clock' },
{ id: 'emergency', name: 'Emergency Consultation', duration: 60, icon: 'message' }
];
const consultationModes = [
{ id: 'in-person', name: 'In-Person Visit', icon: 'building', description: 'Visit hospital for consultation' },
{ id: 'telemedicine', name: 'Telemedicine', icon: 'message', description: 'Online video consultation' },
{ id: 'home-visit', name: 'Home Visit', icon: 'home', description: 'Doctor visits your home' }
];
const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

let currentView = 'public';
let currentPublicTab = 'home';
let currentAdminTab = 'dashboard';
let allRecords = [];
let isLoading = false;
let selectedRecord = null;
let showModal = false;
let modalType = '';
let adminAuthenticated = false;
let adminRole = null;
let filterStatus = 'all';
let filterBranch = 'all';
let searchQuery = '';
let sortBy = 'date';
let bookingStep = 1;
let bookingFormData = { branch: '', department: '', doctor: '', date: '', time: '', consultationType: '', consultationMode: '', name: '', email: '', phone: '', age: '', gender: '', bloodGroup: '', nid: '', symptoms: '', priority: 'normal' };
let auditLogs = [];
let mobileMenuOpen = false;

function showToast(message, type = 'success') {
const toast = document.createElement('div');
toast.className = `toast-intelligent glass-advanced p-5 rounded-2xl flex items-center gap-4 ${type === 'success' ? 'border-l-4 border-green-500' : type === 'error' ? 'border-l-4 border-red-500' : 'border-l-4 border-blue-500'}`;
toast.style.minWidth = '320px';

const config = window.elementSdk?.config || defaultConfig;
const textColor = config.text_color || defaultConfig.text_color;
const baseSize = config.font_size || defaultConfig.font_size;

const icons = { success: '✓', error: '✕', info: 'ℹ️' };
const icon = icons[type] || icons.info;

toast.innerHTML = `
<div style="font-size: ${baseSize * 1.75}px; min-width: 32px; text-align: center;">${icon}</div>
<div style="color: ${textColor}; font-size: ${baseSize}px; font-weight: 600; flex: 1;">${message}</div>
`;

document.getElementById('toast-container').appendChild(toast);

setTimeout(() => {
toast.style.animation = 'toastSlideIn 0.3s ease reverse';
setTimeout(() => toast.remove(), 300);
}, 4500);
}

function addAuditLog(action, details, user = 'System') {
const log = { id: Date.now().toString(), timestamp: new Date().toISOString(), user: user, action: action, details: details };
auditLogs.unshift(log);
if (auditLogs.length > 100) auditLogs.pop();
}

function getStatusColor(status) {
const colors = {
'scheduled': 'bg-blue-500/15 text-blue-300 border-blue-400/30',
'waiting': 'bg-yellow-500/15 text-yellow-300 border-yellow-400/30',
'in-consultation': 'bg-purple-500/15 text-purple-300 border-purple-400/30',
'completed': 'bg-green-500/15 text-green-300 border-green-400/30',
'cancelled': 'bg-red-500/15 text-red-300 border-red-400/30'
};
return colors[status] || 'bg-gray-500/15 text-gray-300 border-gray-400/30';
}

function getStatusDotColor(status) {
const colors = { 'scheduled': '#3b82f6', 'waiting': '#f59e0b', 'in-consultation': '#8b5cf6', 'completed': '#10b981', 'cancelled': '#ef4444' };
return colors[status] || '#6b7280';
}

function getDoctorById(id) { return doctors.find(d => d.id === id); }
function getDepartmentById(id) { return departments.find(d => d.id === id); }
function getBranchById(id) { return hospitalBranches.find(b => b.id === id); }

function getFilteredRecords() {
let filtered = [...allRecords];
if (filterStatus !== 'all') filtered = filtered.filter(r => r.status === filterStatus);
if (filterBranch !== 'all') filtered = filtered.filter(r => r.branch_id === filterBranch);
if (searchQuery) {
const query = searchQuery.toLowerCase();
filtered = filtered.filter(r => r.patient_name.toLowerCase().includes(query) || r.patient_email.toLowerCase().includes(query) || r.patient_phone.includes(query));
}
filtered.sort((a, b) => {
if (sortBy === 'date') return new Date(b.appointment_date + 'T' + b.appointment_time) - new Date(a.appointment_date + 'T' + a.appointment_time);
else if (sortBy === 'priority') {
    const priorityOrder = { high: 3, medium: 2, normal: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
}
return 0;
});
return filtered;
}

function generateQueueNumber() {
const today = new Date().toISOString().split('T')[0];
const todayAppointments = allRecords.filter(r => r.appointment_date === today && r.queue_number);
return todayAppointments.length + 1;
}

function estimateWaitTime(doctorId, appointmentDate) {
const doctorAppointments = allRecords.filter(r => r.doctor_id === doctorId && r.appointment_date === appointmentDate && (r.status === 'scheduled' || r.status === 'waiting' || r.status === 'in-consultation'));
return doctorAppointments.length * 20;
}

function getDoctorAvailability(doctorId, date) {
const dayOfWeek = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
const doctor = getDoctorById(doctorId);
if (!doctor) return false;
return doctor.availability.includes(dayOfWeek);
}

function getPatientVisitHistory(email) {
return allRecords.filter(r => r.patient_email === email).sort((a, b) => new Date(b.appointment_date) - new Date(a.appointment_date));
}

async function createAppointment(formData) {
if (allRecords.length >= 999) {
showToast('Maximum appointment limit reached. Please contact administration.', 'error');
return;
}

isLoading = true;
renderApp();

const visitHistory = getPatientVisitHistory(formData.email);
const newRecord = {
type: 'appointment',
branch_id: formData.branch,
department_id: formData.department,
doctor_id: formData.doctor,
patient_name: formData.name,
patient_email: formData.email,
patient_phone: formData.phone,
patient_age: parseInt(formData.age),
patient_gender: formData.gender,
patient_blood_group: formData.bloodGroup || '',
patient_nid: formData.nid || '',
appointment_date: formData.date,
appointment_time: formData.time,
consultation_type: formData.consultationType,
consultation_mode: formData.consultationMode,
symptoms: formData.symptoms || '',
status: 'scheduled',
priority: formData.priority || 'normal',
queue_number: generateQueueNumber(),
room_number: '',
visit_summary: '',
prescription: '',
follow_up_date: '',
notes: '',
created_at: new Date().toISOString(),
updated_at: new Date().toISOString(),
completed_at: '',
estimated_wait: estimateWaitTime(formData.doctor, formData.date),
check_in_time: '',
consultation_start_time: '',
assigned_by: adminAuthenticated ? `Admin (${adminRole})` : 'Self-Service',
visit_count: visitHistory.length + 1,
last_visit_date: visitHistory.length > 0 ? visitHistory[0].appointment_date : '',
insurance_provider: '',
emergency_contact: '',
referral_source: '',
rating: 0,
feedback: ''
};

const result = await window.dataSdk.create(newRecord);
isLoading = false;

if (result.isOk) {
showToast(`Appointment booked successfully! Queue #${newRecord.queue_number}`, 'success');
addAuditLog('Appointment Created', `${formData.name} - ${formData.date} ${formData.time}`, newRecord.assigned_by);
closeModal();
resetBookingForm();
} else {
showToast('Failed to book appointment. Please try again.', 'error');
}
renderApp();
}

async function updateAppointmentStatus(record, newStatus) {
isLoading = true;
renderApp();

const now = new Date().toISOString();
const updatedRecord = {
...record,
status: newStatus,
updated_at: now,
completed_at: newStatus === 'completed' ? now : record.completed_at,
check_in_time: newStatus === 'waiting' && !record.check_in_time ? now : record.check_in_time,
consultation_start_time: newStatus === 'in-consultation' && !record.consultation_start_time ? now : record.consultation_start_time
};

const result = await window.dataSdk.update(updatedRecord);
isLoading = false;

if (result.isOk) {
showToast(`Status updated to ${newStatus.replace('-', ' ')}`, 'success');
addAuditLog('Status Updated', `${record.patient_name} - ${newStatus}`, adminRole || 'Admin');
} else {
showToast('Failed to update status', 'error');
}
renderApp();
}

async function deleteAppointment(record) {
isLoading = true;
renderApp();

const result = await window.dataSdk.delete(record);
isLoading = false;

if (result.isOk) {
showToast('Appointment deleted successfully', 'success');
addAuditLog('Appointment Deleted', `${record.patient_name} - ${record.appointment_date}`, adminRole || 'Admin');
closeModal();
} else {
showToast('Failed to delete appointment', 'error');
}
renderApp();
}

function openModal(type, record = null) {
modalType = type;
selectedRecord = record;
showModal = true;
if (type === 'book-appointment') bookingStep = 1;
renderApp();
}

function closeModal() {
showModal = false;
modalType = '';
selectedRecord = null;
renderApp();
}

function resetBookingForm() {
bookingFormData = { branch: '', department: '', doctor: '', date: '', time: '', consultationType: '', consultationMode: '', name: '', email: '', phone: '', age: '', gender: '', bloodGroup: '', nid: '', symptoms: '', priority: 'normal' };
bookingStep = 1;
}

function switchView(view) {
if (view === 'admin' && !adminAuthenticated) {
openModal('admin-login');
return;
}
currentView = view;
mobileMenuOpen = false;
renderApp();
}

function toggleMobileMenu() {
mobileMenuOpen = !mobileMenuOpen;
renderApp();
}

function closeMobileMenu() {
mobileMenuOpen = false;
}

function handleAdminLogin(password) {
const validCredentials = { 'admin2024': 'Administrator', 'doctor2024': 'Doctor', 'staff2024': 'Staff' };

if (validCredentials[password]) {
adminAuthenticated = true;
adminRole = validCredentials[password];
currentView = 'admin';
showToast(`Logged in as ${adminRole}`, 'success');
addAuditLog('Admin Login', `${adminRole} logged in`);
closeModal();
} else {
showToast('Invalid credentials', 'error');
}
}

function nextBookingStep() {
if (bookingStep === 1) {
if (!bookingFormData.branch || !bookingFormData.department || !bookingFormData.doctor) {
    showToast('Please complete all required fields', 'error');
    return;
}
} else if (bookingStep === 2) {
if (!bookingFormData.date || !bookingFormData.time || !bookingFormData.consultationType || !bookingFormData.consultationMode) {
    showToast('Please complete all required fields', 'error');
    return;
}
if (!getDoctorAvailability(bookingFormData.doctor, bookingFormData.date)) {
    showToast('Doctor is not available on selected date', 'error');
    return;
}
}
bookingStep++;
renderApp();
}

function prevBookingStep() {
bookingStep--;
renderApp();
}

function getAnalytics() {
const today = new Date().toISOString().split('T')[0];
const todayAppointments = allRecords.filter(r => r.appointment_date === today);

const byStatus = {
scheduled: allRecords.filter(r => r.status === 'scheduled').length,
waiting: allRecords.filter(r => r.status === 'waiting').length,
inConsultation: allRecords.filter(r => r.status === 'in-consultation').length,
completed: allRecords.filter(r => r.status === 'completed').length,
cancelled: allRecords.filter(r => r.status === 'cancelled').length
};

const byDepartment = departments.map(dept => ({
name: dept.name,
count: allRecords.filter(r => r.department_id === dept.id).length,
color: dept.color
}));

const byBranch = hospitalBranches.map(branch => ({
name: branch.name,
count: allRecords.filter(r => r.branch_id === branch.id).length
}));

const doctorWorkload = doctors.map(doctor => ({
name: doctor.name,
department: getDepartmentById(doctor.department)?.name,
total: allRecords.filter(r => r.doctor_id === doctor.id).length,
today: todayAppointments.filter(r => r.doctor_id === doctor.id).length,
completed: allRecords.filter(r => r.doctor_id === doctor.id && r.status === 'completed').length
})).sort((a, b) => b.total - a.total);

return { total: allRecords.length, todayCount: todayAppointments.length, byStatus, byDepartment, byBranch, doctorWorkload };
}

function renderApp() {
const app = document.getElementById('app');
const config = window.elementSdk?.config || defaultConfig;

let content = currentView === 'public' ? renderPublicView() : renderAdminView();
content += renderModals();

app.innerHTML = content;
}

function renderPublicView() {
const config = window.elementSdk?.config || defaultConfig;
const baseSize = config.font_size || defaultConfig.font_size;
const customFont = config.font_family || defaultConfig.font_family;
const textColor = config.text_color || defaultConfig.text_color;
const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
const backgroundColor = config.background_color || defaultConfig.background_color;

return `
<div class="h-full w-full gradient-bg-primary flex flex-col overflow-hidden" style="font-family: ${customFont}, Inter, sans-serif; font-size: ${baseSize}px; color: ${textColor}; background: ${backgroundColor};">
    ${renderPublicHeader(config, baseSize, textColor, primaryColor)}
    <div class="flex-1 overflow-auto scroll-custom page-enter">
    ${currentPublicTab === 'home' ? renderHome(config, baseSize, textColor, primaryColor) : ''}
    ${currentPublicTab === 'departments' ? renderDepartments(config, baseSize, textColor, primaryColor) : ''}
    ${currentPublicTab === 'doctors' ? renderDoctors(config, baseSize, textColor, primaryColor) : ''}
    ${currentPublicTab === 'branches' ? renderBranches(config, baseSize, textColor, primaryColor) : ''}
    </div>
</div>
`;
}

function renderPublicHeader(config, baseSize, textColor, primaryColor) {
const tabs = [
{ id: 'home', label: 'Home', icon: 'home' },
{ id: 'departments', label: 'Departments', icon: 'building' },
{ id: 'doctors', label: 'Doctors', icon: 'stethoscope' },
{ id: 'branches', label: 'Branches', icon: 'location' }
];

return `
<header class="glass-advanced sticky top-0 z-40 border-b border-white/10 public-header">
    <div class="max-w-7xl mx-auto px-8 py-4">
    <div class="flex justify-between items-center mb-3">
        <div class="header-title">
        <h1 style="font-size: ${baseSize * 1.75}px; font-weight: 900; color: ${textColor}; margin-bottom: 0.25rem; letter-spacing: -0.02em;">
            ${config.hospital_name || defaultConfig.hospital_name}
        </h1>
        <p style="font-size: ${baseSize * 0.875}px; color: ${textColor}; opacity: 0.7; font-weight: 500;">
            ${config.hospital_tagline || defaultConfig.hospital_tagline}
        </p>
        </div>
        <div class="header-buttons flex gap-2">
        <button onclick="openModal('book-appointment')" class="btn-contextual px-5 py-2.5 rounded-lg" style="background: ${primaryColor}; color: white; font-size: 0.9rem;">
            <span style="width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; margin-right: 0.375rem;">${icons.calendar}</span> Book
        </button>
        <button onclick="switchView('admin')" class="btn-contextual px-5 py-2.5 rounded-lg glass-advanced" style="font-size: 0.9rem;">
            <span style="width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; margin-right: 0.375rem;">${icons.lock}</span> Staff
        </button>
        </div>
        <button class="mobile-nav-toggle" onclick="toggleMobileMenu();">
        <span></span>
        <span></span>
        <span></span>
        </button>
    </div>
    <nav class="desktop-nav flex space-x-1 overflow-x-auto scroll-custom pb-1">
        ${tabs.map(tab => `
        <button onclick="currentPublicTab='${tab.id}'; closeMobileMenu(); renderApp();" 
            class="nav-layered whitespace-nowrap flex items-center gap-2 ${currentPublicTab === tab.id ? 'active' : ''}"
            style="color: ${currentPublicTab === tab.id ? primaryColor : textColor}; font-weight: ${currentPublicTab === tab.id ? '700' : '500'};">
            <span style="width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center;">${icons[tab.icon]}</span>
            <span>${tab.label}</span>
        </button>
        `).join('')}
    </nav>
    <div class="mobile-menu ${mobileMenuOpen ? 'active' : ''}">
        ${tabs.map(tab => `
        <button onclick="currentPublicTab='${tab.id}'; closeMobileMenu(); renderApp();" 
            class="mobile-menu-btn ${currentPublicTab === tab.id ? 'active' : ''}">
            <span style="width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; margin-right: 0.5rem;">${icons[tab.icon]}</span>
            ${tab.label}
        </button>
        `).join('')}
        <div class="premium-divider my-2"></div>
        <button onclick="openModal('book-appointment'); closeMobileMenu();" class="btn-contextual w-full px-4 py-3 rounded-xl" style="background: ${primaryColor}; color: white; font-weight: 700; justify-content: center; display: flex; align-items: center; gap: 0.5rem;">
        <span style="width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center;">${icons.calendar}</span> Book Appointment
        </button>
        <button onclick="switchView('admin'); closeMobileMenu();" class="btn-contextual w-full px-4 py-3 rounded-xl glass-advanced" style="font-weight: 700; justify-content: center;">
        <span style="width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center;">${icons.lock}</span> Staff Portal
        </button>
    </div>
    </div>
</header>
`;
}

function renderHome(config, baseSize, textColor, primaryColor) {
const today = new Date().toISOString().split('T')[0];
const surfaceColor = config.surface_color || defaultConfig.surface_color;

return `
<div class="max-w-7xl mx-auto px-8 py-12 space-y-16">
    <section class="glass-advanced rounded-3xl p-16 relative overflow-hidden card-intelligent">
    <div class="relative z-10 max-w-3xl">
        <h2 style="font-size: ${baseSize * 3.5}px; font-weight: 900; color: ${textColor}; margin-bottom: 1.5rem; line-height: 1.1; letter-spacing: -0.02em;">
        ${config.hero_title || defaultConfig.hero_title}
        </h2>
        <p style="font-size: ${baseSize * 1.375}px; color: ${textColor}; opacity: 0.85; margin-bottom: 3rem; line-height: 1.6;">
        ${config.hero_subtitle || defaultConfig.hero_subtitle}
        </p>
        <div class="flex gap-4">
        <button onclick="openModal('book-appointment')" class="btn-contextual px-8 py-4 rounded-xl" style="background: ${primaryColor}; color: white; font-weight: 700; font-size: ${baseSize * 1.125}px; display: flex; align-items: center; gap: 0.75rem;">
            <span style="width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center;">${icons.calendar}</span> ${config.cta_primary || defaultConfig.cta_primary}
        </button>
        <button class="btn-contextual px-8 py-4 rounded-xl glass-advanced" style="font-weight: 700; font-size: ${baseSize * 1.125}px; display: flex; align-items: center; gap: 0.75rem;">
            <span style="width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; color: #ef4444;">${icons.message}</span> ${config.cta_secondary || defaultConfig.cta_secondary}
        </button>
        </div>
    </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-4 gap-6">
    ${[
        { icon: 'building', value: hospitalBranches.length, label: 'Hospital Branches', color: primaryColor },
        { icon: 'stethoscope', value: doctors.length, label: 'Expert Doctors', color: '#8b5cf6' },
        { icon: 'building', value: departments.length, label: 'Departments', color: '#10b981' },
        { icon: '⏰', value: '24/7', label: 'Emergency Care', color: '#f59e0b' }
    ].map(stat => `
        <div class="glass-advanced rounded-2xl p-8 text-center card-intelligent">
        <div style="font-size: ${baseSize * 3.5}px; margin-bottom: 1rem;">${stat.icon}</div>
        <div class="stat-counter" style="font-size: ${baseSize * 2.75}px; font-weight: 900; color: ${stat.color}; margin-bottom: 0.75rem;">${stat.value}</div>
        <div style="font-size: ${baseSize * 0.9375}px; opacity: 0.75; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">${stat.label}</div>
        </div>
    `).join('')}
    </section>

    <section>
    <div class="flex justify-between items-center mb-8">
        <div>
        <h3 style="font-size: ${baseSize * 2.25}px; font-weight: 900; margin-bottom: 0.5rem;">Our Specialties</h3>
        <p style="font-size: ${baseSize * 1.0625}px; opacity: 0.7;">Comprehensive healthcare across all major medical fields</p>
        </div>
        <button onclick="currentPublicTab='departments'; renderApp();" class="btn-contextual px-5 py-3 rounded-xl glass-advanced" style="color: ${primaryColor};">
        View All →
        </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${departments.slice(0, 8).map(dept => {
        const doctorCount = doctors.filter(d => d.department === dept.id).length;
        return `
            <div class="glass-advanced rounded-2xl p-6 card-intelligent cursor-pointer" onclick="currentPublicTab='departments'; renderApp();">
            <div class="dept-icon-advanced mb-5" style="background: ${dept.color}20; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; border-radius: 12px; color: ${dept.color};">
                ${icons[dept.icon]}
            </div>
            <h4 style="font-size: ${baseSize * 1.25}px; font-weight: 700; margin-bottom: 0.625rem;">${dept.name}</h4>
            <p style="font-size: ${baseSize * 0.9375}px; opacity: 0.7; margin-bottom: 1.25rem; line-height: 1.5;">${dept.description}</p>
            <div class="flex justify-between text-sm" style="font-size: ${baseSize * 0.875}px;">
                <div>
                <div style="font-weight: 700; color: ${dept.color}; font-size: ${baseSize * 1.125}px;">${doctorCount}</div>
                <div style="opacity: 0.6; font-size: ${baseSize * 0.75}px;">Doctors</div>
                </div>
                <div>
                <div style="font-weight: 700; color: ${dept.color}; font-size: ${baseSize * 1.125}px;">${dept.beds}</div>
                <div style="opacity: 0.6; font-size: ${baseSize * 0.75}px;">Beds</div>
                </div>
            </div>
            </div>
        `;
        }).join('')}
    </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
    ${[
        { icon: 'message', title: 'Email', value: config.unified_email || defaultConfig.unified_email, desc: 'General inquiries & support', color: primaryColor },
        { icon: 'message', title: 'Emergency Hotline', value: config.emergency_hotline || defaultConfig.emergency_hotline, desc: 'Available 24/7 for emergencies', color: '#ef4444' },
        { icon: 'clock', title: 'Dhaka Branch', value: config.dhaka_phone || defaultConfig.dhaka_phone, desc: 'Mon-Sun: 8 AM - 10 PM', color: '#10b981' }
    ].map(contact => `
        <div class="glass-advanced rounded-2xl p-8 card-intelligent">
        <div style="font-size: ${baseSize * 3}px; margin-bottom: 1.25rem;">${contact.icon}</div>
        <div style="font-size: ${baseSize * 1.125}px; font-weight: 700; margin-bottom: 1rem; opacity: 0.9;">${contact.title}</div>
        <div style="font-size: ${baseSize * 1.375}px; font-weight: 800; color: ${contact.color}; margin-bottom: 0.75rem; font-family: 'JetBrains Mono', monospace;">${contact.value}</div>
        <p style="font-size: ${baseSize * 0.9375}px; opacity: 0.7;">${contact.desc}</p>
        </div>
    `).join('')}
    </section>
</div>
`;
}

function renderDepartments(config, baseSize, textColor, primaryColor) {
return `
<div class="max-w-7xl mx-auto px-8 py-12 space-y-10">
    <div>
    <h2 style="font-size: ${baseSize * 2.75}px; font-weight: 900; margin-bottom: 1rem;">Medical Departments</h2>
    <p style="font-size: ${baseSize * 1.125}px; opacity: 0.75;">Comprehensive healthcare services across all specialties</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    ${departments.map(dept => {
        const doctorCount = doctors.filter(d => d.department === dept.id).length;
        const avgRating = doctors.filter(d => d.department === dept.id).reduce((sum, d) => sum + d.rating, 0) / doctorCount || 0;
        
        return `
        <div class="glass-advanced rounded-2xl p-8 card-intelligent doctor-profile-advanced">
            <div class="dept-icon-advanced mb-6" style="background: ${dept.color}20; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 16px; color: ${dept.color};">
            ${icons[dept.icon]}
            </div>
            <h3 style="font-size: ${baseSize * 1.5}px; font-weight: 700; margin-bottom: 0.75rem;">${dept.name}</h3>
            <p style="font-size: ${baseSize}px; opacity: 0.75; margin-bottom: 2rem; line-height: 1.6;">${dept.description}</p>
            
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div class="text-center">
                <div style="font-size: ${baseSize * 1.5}px; font-weight: 800; color: ${dept.color};">${doctorCount}</div>
                <div style="font-size: ${baseSize * 0.75}px; opacity: 0.7; font-weight: 600;">DOCTORS</div>
            </div>
            <div class="text-center">
                <div style="font-size: ${baseSize * 1.5}px; font-weight: 800; color: ${dept.color};">${dept.beds}</div>
                <div style="font-size: ${baseSize * 0.75}px; opacity: 0.7; font-weight: 600;">BEDS</div>
            </div>
            <div class="text-center">
                <div style="font-size: ${baseSize * 1.5}px; font-weight: 800; color: ${dept.color};">${avgRating.toFixed(1)}</div>
                <div style="font-size: ${baseSize * 0.75}px; opacity: 0.7; font-weight: 600;">RATING</div>
            </div>
            </div>

            <button onclick="bookingFormData.department='${dept.id}'; openModal('book-appointment');" class="btn-contextual w-full mt-6 py-3 rounded-xl" style="background: ${dept.color}; color: white; font-weight: 700;">
            Book Appointment
            </button>
        </div>
        `;
    }).join('')}
    </div>
</div>
`;
}

function renderDoctors(config, baseSize, textColor, primaryColor) {
return `
<div class="max-w-7xl mx-auto px-8 py-12 space-y-10">
    <div>
    <h2 style="font-size: ${baseSize * 2.75}px; font-weight: 900; margin-bottom: 1rem;">Our Medical Experts</h2>
    <p style="font-size: ${baseSize * 1.125}px; opacity: 0.75;">Experienced specialists dedicated to your health</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    ${doctors.map(doctor => {
        const dept = getDepartmentById(doctor.department);
        const isAvailableToday = doctor.availability.includes(new Date().toLocaleDateString('en-US', { weekday: 'short' }));
        
        return `
        <div class="glass-advanced rounded-2xl p-8 card-intelligent doctor-profile-advanced">
            <div class="flex justify-between items-start mb-6">
            <div class="flex-1">
                <h3 style="font-size: ${baseSize * 1.375}px; font-weight: 700; margin-bottom: 0.5rem;">${doctor.name}</h3>
                <p style="font-size: ${baseSize * 0.9375}px; opacity: 0.75; font-weight: 600; margin-bottom: 0.375rem;">${doctor.qualification}</p>
                ${isAvailableToday ? `<div class="availability-live mt-2">Available Today</div>` : ''}
            </div>
            <div class="glass-advanced px-4 py-3 rounded-xl text-center">
                <div style="font-size: ${baseSize * 1.25}px; color: ${primaryColor}; font-weight: 800;">⭐ ${doctor.rating}</div>
            </div>
            </div>

            <div class="space-y-4 mb-6">
            <div style="font-size: ${baseSize * 0.9375}px;">
                <span style="opacity: 0.6; font-weight: 600;">Department:</span> 
                <span style="font-weight: 700; color: ${dept?.color};">${dept?.name}</span>
            </div>
            <div style="font-size: ${baseSize * 0.9375}px;">
                <span style="opacity: 0.6; font-weight: 600;">Specialization:</span> 
                <span style="font-weight: 700;">${doctor.specialization}</span>
            </div>
            <div style="font-size: ${baseSize * 0.9375}px;">
                <span style="opacity: 0.6; font-weight: 600;">Experience:</span> 
                <span style="font-weight: 700;">${doctor.experience} years</span>
            </div>
            <div style="font-size: ${baseSize * 0.9375}px;">
                <span style="opacity: 0.6; font-weight: 600;">Consultation Fee:</span> 
                <span style="font-weight: 700; color: ${primaryColor};">৳${doctor.fee}</span>
            </div>
            </div>

            <div class="mb-6">
            <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.7; margin-bottom: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Contact</div>
            <div class="space-y-2">
                <div style="font-size: ${baseSize * 0.875}px; font-family: 'JetBrains Mono', monospace;"><span style="width: 14px; height: 14px; display: inline-flex; align-items: center; justify-content: center; margin-right: 0.375rem;">${icons.clock}</span> ${doctor.phone}</div>
                <div style="font-size: ${baseSize * 0.875}px; font-family: 'JetBrains Mono', monospace;"><span style="width: 14px; height: 14px; display: inline-flex; align-items: center; justify-content: center; margin-right: 0.375rem;">${icons.message}</span> ${doctor.email}</div>
            </div>
            </div>

            <div class="mb-6">
            <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.7; margin-bottom: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Availability</div>
            <div class="flex flex-wrap gap-2">
                ${doctor.availability.map(day => `
                <span class="glass-advanced px-3 py-1.5 rounded-lg" style="font-size: ${baseSize * 0.8125}px; color: ${primaryColor}; font-weight: 600;">${day}</span>
                `).join('')}
            </div>
            </div>

            <div class="mb-6">
            <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.7; margin-bottom: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Consultation Modes</div>
            <div class="flex flex-wrap gap-2">
                ${doctor.consultationModes.map(mode => {
                const modeData = consultationModes.find(m => m.id === mode);
                return `<span class="consultation-badge ${mode}">${modeData?.icon} ${modeData?.name || mode}</span>`;
                }).join('')}
            </div>
            </div>

            <button onclick="bookingFormData.doctor='${doctor.id}'; bookingFormData.department='${doctor.department}'; openModal('book-appointment');" class="btn-contextual w-full py-3.5 rounded-xl" style="background: ${primaryColor}; color: white; font-weight: 700;">
            Book Appointment
            </button>
        </div>
        `;
    }).join('')}
    </div>
</div>
`;
}

function renderBranches(config, baseSize, textColor, primaryColor) {
return `
<div class="max-w-7xl mx-auto px-8 py-12 space-y-10">
    <div>
    <h2 style="font-size: ${baseSize * 2.75}px; font-weight: 900; margin-bottom: 1rem;">Our Locations</h2>
    <p style="font-size: ${baseSize * 1.125}px; opacity: 0.75;">State-of-the-art facilities across Bangladesh</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    ${hospitalBranches.map((branch, index) => {
        const doctorCount = doctors.filter(d => d.branches.includes(branch.id)).length;
        const phoneKey = `${branch.id}_phone`;
        const phone = config[phoneKey] || defaultConfig[phoneKey] || branch.phone;
        
        return `
        <div class="glass-advanced rounded-2xl p-10 card-intelligent doctor-profile-advanced">
            <div class="flex items-start gap-6 mb-8">
            <div class="dept-icon-advanced" style="background: ${['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'][index]}20; width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; border-radius: 12px;">
                ${icons.location}
            </div>
            <div class="flex-1">
                <h3 style="font-size: ${baseSize * 1.75}px; font-weight: 800; margin-bottom: 0.5rem;">${branch.name}</h3>
                <p style="font-size: ${baseSize * 1.0625}px; opacity: 0.7; font-weight: 500;">${branch.city}</p>
            </div>
            </div>

            <div class="space-y-5 mb-8">
            <div>
                <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.6; margin-bottom: 0.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Address</div>
                <div style="font-size: ${baseSize * 1.0625}px; font-weight: 600; line-height: 1.5;">${branch.address}</div>
            </div>
            <div>
                <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.6; margin-bottom: 0.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Contact</div>
                <div style="font-size: ${baseSize * 1.0625}px; font-weight: 600; font-family: 'JetBrains Mono', monospace;"><span style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; margin-right: 0.375rem;">${icons.clock}</span> ${phone}</div>
                <div style="font-size: ${baseSize * 1.0625}px; font-weight: 600; font-family: 'JetBrains Mono', monospace; margin-top: 0.375rem;"><span style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; margin-right: 0.375rem;">${icons.message}</span> ${branch.email}</div>
            </div>
            <div>
                <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.6; margin-bottom: 0.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Capacity</div>
                <div style="font-size: ${baseSize * 1.0625}px; font-weight: 600;">${branch.capacity} beds • Established ${branch.established}</div>
            </div>
            </div>

            <div class="mb-8">
            <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.6; margin-bottom: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Services Available</div>
            <div class="flex flex-wrap gap-2">
                ${branch.services.map(service => `
                <span class="glass-advanced px-3 py-2 rounded-lg" style="font-size: ${baseSize * 0.875}px; font-weight: 600;"><span style="width: 12px; height: 12px; display: inline-flex; align-items: center; justify-content: center; margin-right: 0.25rem; color: #10b981;">${icons.checkCircle}</span> ${service}</span>
                `).join('')}
            </div>
            </div>

            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div class="text-center">
                <div class="stat-counter" style="font-size: ${baseSize * 2.25}px; font-weight: 900; color: ${primaryColor};">${doctorCount}</div>
                <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.7; font-weight: 700; text-transform: uppercase;">DOCTORS</div>
            </div>
            <div class="text-center">
                <div class="stat-counter" style="font-size: ${baseSize * 2.25}px; font-weight: 900; color: ${primaryColor};">${allRecords.filter(r => r.branch_id === branch.id).length}</div>
                <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.7; font-weight: 700; text-transform: uppercase;">APPOINTMENTS</div>
            </div>
            </div>
        </div>
        `;
    }).join('')}
    </div>
</div>
`;
}

function renderAdminView() {
const config = window.elementSdk?.config || defaultConfig;
const baseSize = config.font_size || defaultConfig.font_size;
const customFont = config.font_family || defaultConfig.font_family;
const textColor = config.text_color || defaultConfig.text_color;
const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;
const backgroundColor = config.background_color || defaultConfig.background_color;

return `
<div class="h-full w-full flex flex-col gradient-bg-primary admin-container" style="font-family: ${customFont}, Inter, sans-serif; font-size: ${baseSize}px; color: ${textColor}; background: ${backgroundColor};">
    ${renderAdminSidebar(config, baseSize, textColor, primaryColor)}
    <div class="flex-1 flex flex-col overflow-hidden admin-main">
    ${renderAdminHeader(config, baseSize, textColor, primaryColor)}
    <div class="flex-1 overflow-auto scroll-custom p-8 page-enter" style="padding: 1rem;">
        ${currentAdminTab === 'dashboard' ? renderAdminDashboard(config, baseSize, textColor, primaryColor) : ''}
        ${currentAdminTab === 'appointments' ? renderAdminAppointments(config, baseSize, textColor, primaryColor) : ''}
        ${currentAdminTab === 'analytics' ? renderAdminAnalytics(config, baseSize, textColor, primaryColor) : ''}
        ${currentAdminTab === 'queue' ? renderAdminQueue(config, baseSize, textColor, primaryColor) : ''}
    </div>
    </div>
</div>
`;
}

function renderAdminSidebar(config, baseSize, textColor, primaryColor) {
const tabs = [
{ id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
{ id: 'appointments', icon: 'calendar', label: 'Appointments' },
{ id: 'analytics', icon: 'analytics', label: 'Analytics' },
{ id: 'queue', icon: 'queue', label: 'Queue Management' }
];

return `
<aside class="admin-sidebar w-80 glass-advanced border-r border-white/10 flex flex-col" style="display: flex;">
    <div class="p-5 border-b border-white/10">
    <div style="font-size: ${baseSize * 1.5}px; font-weight: 900; margin-bottom: 0.375rem;">Admin Portal</div>
    <p style="font-size: ${baseSize * 0.85}px; opacity: 0.75; font-weight: 500;">Hospital System</p>
    ${adminRole ? `
        <div class="mt-3 glass-advanced px-3 py-1.5 rounded-lg inline-block">
        <span style="font-size: ${baseSize * 0.8}px; font-weight: 600; color: ${primaryColor};">${adminRole}</span>
        </div>
    ` : ''}
    </div>
    <nav class="flex-1 p-3 space-y-1 overflow-y-auto scroll-custom">
    ${tabs.map(tab => `
        <button onclick="currentAdminTab='${tab.id}'; renderApp();" 
        class="nav-layered w-full text-left ${currentAdminTab === tab.id ? 'active' : ''}" style="padding: 0.5rem 0.75rem; gap: 0.5rem;">
        <span style="width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center; color: currentColor;">${icons[tab.icon]}</span>
        <span style="font-weight: ${currentAdminTab === tab.id ? '700' : '500'}; font-size: 0.9rem;">${tab.label}</span>
        </button>
    `).join('')}
    </nav>
    <div class="p-3 border-t border-white/10">
    <button onclick="currentView='public'; adminAuthenticated=false; adminRole=null; renderApp();" class="btn-contextual w-full py-2.5 rounded-lg glass-advanced" style="font-weight: 600; font-size: 0.9rem;">
        ← Exit
    </button>
    </div>
</aside>
`;
}

function renderAdminHeader(config, baseSize, textColor, primaryColor) {
const now = new Date();
const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

const tabs = [
{ id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
{ id: 'appointments', icon: 'calendar', label: 'Appointments' },
{ id: 'analytics', icon: 'analytics', label: 'Analytics' },
{ id: 'queue', icon: 'queue', label: 'Queue Management' }
];

return `
<header class="glass-advanced border-b border-white/10 p-4">
    <div class="flex justify-between items-center mb-4">
    <div>
        <h1 style="font-size: ${baseSize * 1.5}px; font-weight: 900; margin-bottom: 0.25rem;">
        Admin Portal
        </h1>
        <p style="font-size: ${baseSize * 0.85}px; opacity: 0.7; font-weight: 500;">${dateStr} • ${timeStr}</p>
    </div>
    ${isLoading ? '<div class="loading-intelligent" style="width: 40px; height: 40px;"></div>' : ''}
    </div>
    <nav class="flex space-x-2 overflow-x-auto pb-2 scroll-custom">
    ${tabs.map(tab => `
        <button onclick="currentAdminTab='${tab.id}'; renderApp();" 
        class="nav-layered whitespace-nowrap px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${currentAdminTab === tab.id ? 'active' : ''}" style="flex-shrink: 0; font-size: 0.85rem; font-weight: ${currentAdminTab === tab.id ? '700' : '500'};">
        <span style="width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center;">${icons[tab.icon]}</span>${tab.label}
        </button>
    `).join('')}
    </nav>
</header>
`;
}

// Icon SVG helper - Graphical filled icons
const icons = {
calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" opacity="0.2"/><rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 2v4M8 2v4" stroke="currentColor" stroke-width="2"/><rect x="3" y="10" width="18" height="0.5" fill="currentColor"/></svg>',
users: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4" fill="currentColor"/><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="currentColor"/><circle cx="19" cy="13" r="3.5" fill="currentColor" opacity="0.8"/><path d="M22.5 21v-1.5a3.5 3.5 0 0 0-2.8-3.4" fill="currentColor" opacity="0.8"/></svg>',
message: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="1.5"/></svg>',
chart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="5" y="12" width="2" height="8" fill="currentColor"/><rect x="10" y="8" width="2" height="12" fill="currentColor"/><rect x="15" y="5" width="2" height="15" fill="currentColor"/></svg>',
checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1.5"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
clock: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
settings: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 1v4m0 8v4M4.22 4.22l2.83 2.83m2.12 2.12l2.83 2.83M1 12h4m8 0h4M4.22 19.78l2.83-2.83m2.12-2.12l2.83-2.83" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
book: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1.5"/></svg>',
home: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="12" width="6" height="10" fill="currentColor" opacity="0.4"/></svg>',
building: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1.5"/><rect x="5" y="10" width="2" height="6" fill="currentColor"/><rect x="9" y="10" width="2" height="6" fill="currentColor"/><rect x="13" y="10" width="2" height="6" fill="currentColor"/><rect x="17" y="10" width="2" height="6" fill="currentColor"/></svg>',
dashboard: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="1"/><rect x="14" y="3" width="7" height="7" fill="currentColor" opacity="0.5" stroke="currentColor" stroke-width="1"/><rect x="14" y="14" width="7" height="7" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1"/><rect x="3" y="14" width="7" height="7" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="1"/></svg>',
analytics: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 12c0 3 2.24 5.5 5 5.5M12 3v9m0 0v4.5M21 12c0-3-2.24-5.5-5-5.5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>',
queue: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect x="2" y="2" width="5" height="5" fill="currentColor"/><rect x="9" y="2" width="5" height="5" fill="currentColor" opacity="0.7"/><rect x="16" y="2" width="5" height="5" fill="currentColor" opacity="0.5"/><rect x="2" y="9" width="5" height="5" fill="currentColor" opacity="0.7"/><rect x="9" y="9" width="5" height="5" fill="currentColor" opacity="0.5"/><rect x="16" y="9" width="5" height="5" fill="currentColor" opacity="0.3"/></svg>',
book_open: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="currentColor" opacity="0.3"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="currentColor" opacity="0.5"/><line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" stroke-width="1" opacity="0.6"/></svg>',
stethoscope: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M6 3c-1.1 0-2 .9-2 2v3a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V5c0-1.1-.9-2-2-2h-1" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="14" r="3" fill="currentColor" opacity="0.6"/><path d="M12 17a3 3 0 0 1 3 3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
location: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.4" stroke="currentColor" stroke-width="1"/><circle cx="12" cy="9" r="2" fill="currentColor"/></svg>',
lock: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" fill="currentColor" opacity="0.3" stroke="currentColor" stroke-width="1.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="17" r="1.5" fill="currentColor"/></svg>',
heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/></svg>',
brain: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.5 2C7 2 5 4 5 6.5c0 1.5.5 3 1.5 4-.5 1-1.5 2-1.5 4 0 2.5 2 4.5 4.5 4.5h.5v2c0 1.1.9 2 2 2s2-.9 2-2v-2h1v2c0 1.1.9 2 2 2s2-.9 2-2v-2h.5c2.5 0 4.5-2 4.5-4.5 0-2-1-3-1.5-4 1-1 1.5-2.5 1.5-4C19 4 17 2 14.5 2c-1.5 0-2.8.8-3.5 2-.7-1.2-2-2-3.5-2z" fill="currentColor"/></svg>',
bone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5" fill="currentColor"/><circle cx="18" cy="12" r="2.5" fill="currentColor"/><rect x="8.5" y="10.5" width="7" height="3" fill="currentColor"/></svg>',
baby: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" fill="currentColor"/><path d="M12 12c-2.5 0-4.5 2-4.5 4.5v3.5c0 1.1.9 2 2 2h1v2h1v-2h3v2h1v-2h1c1.1 0 2-.9 2-2v-3.5c0-2.5-2-4.5-4.5-4.5z" fill="currentColor"/><circle cx="9" cy="6" r="1" fill="currentColor" opacity="0.6"/><circle cx="15" cy="6" r="1" fill="currentColor" opacity="0.6"/></svg>',
pregnancy: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2" fill="currentColor"/><path d="M12 8c-1.66 0-3 1.34-3 3v5c0 1.1-.9 2-2 2s-2-.9-2-2v-2c0 0 0-4 7-7 7 3 7 7 7 7v2c0 1.1-.9 2-2 2s-2-.9-2-2v-5c0-1.66-1.34-3-3-3z" fill="currentColor"/></svg>',
skin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="8" ry="10" fill="currentColor" opacity="0.3"/><path d="M8 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm8-1c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4 6c-1.5 0-3 1-3 2.5 0 .5.2 1 .5 1.5.8 1.2 2.5 2 3.5 2s2.7-.8 3.5-2c.3-.5.5-1 .5-1.5 0-1.5-1.5-2.5-3-2.5z" fill="currentColor"/></svg>',
eye: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5C7 5 2.73 8.11 1 12.46c1.73 4.35 6 7.54 11 7.54s9.27-3.19 11-7.54C21.27 8.11 17 5 12 5m0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="currentColor"/></svg>',
heartbeat: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 12l2-3m4 3l4 5m4-5l3 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M19 4h-4V2h-2v2h-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M5 12c1-2 3-4 7-4s6 2 7 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>'
};

function renderAdminDashboard(config, baseSize, textColor, primaryColor) {
const analytics = getAnalytics();
const today = new Date().toISOString().split('T')[0];
const todayAppointments = allRecords.filter(r => r.appointment_date === today);
const activeAppointments = todayAppointments.filter(r => r.status === 'waiting' || r.status === 'in-consultation');

return `
<div class="space-y-8" style="max-height: calc(100vh - 200px); overflow-y: auto;">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    ${[
        { label: "Today's Total", value: analytics.todayCount, icon: 'calendar', color: primaryColor, subtext: `${activeAppointments.length} active` },
        { label: 'In Consultation', value: analytics.byStatus.inConsultation, icon: 'message', color: '#8b5cf6', subtext: 'Ongoing now' },
        { label: 'Waiting Queue', value: analytics.byStatus.waiting, icon: 'clock', color: '#f59e0b', subtext: 'Patients waiting' },
        { label: 'Completed', value: todayAppointments.filter(r => r.status === 'completed').length, icon: 'checkCircle', color: '#10b981', subtext: 'Today' }
    ].map(stat => `
        <div class="glass-advanced rounded-2xl p-6 card-intelligent">
        <div class="flex items-center justify-between mb-4">
            <div style="font-size: ${baseSize * 0.9375}px; opacity: 0.7; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">${stat.label}</div>
            <span style="width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; color: ${stat.color};">${icons[stat.icon]}</span>
        </div>
        <div class="stat-counter" style="font-size: ${baseSize * 3}px; font-weight: 900; color: ${stat.color}; margin-bottom: 0.625rem;">${stat.value}</div>
        <div style="font-size: ${baseSize * 0.9375}px; opacity: 0.7;">${stat.subtext}</div>
        </div>
    `).join('')}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    ${[
        { icon: 'calendar', label: 'New Appointment', action: "openModal('book-appointment')", color: primaryColor },
        { icon: 'clock', label: 'Queue Management', action: "currentAdminTab='queue'; renderApp();", color: '#f59e0b' },
        { icon: 'analytics', label: 'View Analytics', action: "currentAdminTab='analytics'; renderApp();", color: '#10b981' }
    ].map(card => `
        <button onclick="${card.action}" class="glass-advanced rounded-2xl p-8 text-center cursor-pointer card-intelligent">
        <div style="width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; color: ${card.color};">${icons[card.icon]}</div>
        <div style="font-size: ${baseSize * 1.25}px; font-weight: 700; color: ${card.color};">${card.label}</div>
        </button>
    `).join('')}
    </div>

    <div class="glass-advanced rounded-2xl p-8">
    <div class="flex justify-between items-center mb-6">
        <h3 style="font-size: ${baseSize * 1.75}px; font-weight: 800;">Today's Schedule</h3>
        <button onclick="currentAdminTab='appointments'; renderApp();" class="btn-contextual px-5 py-3 rounded-xl glass-advanced" style="color: ${primaryColor}; font-weight: 600;">
        View All →
        </button>
    </div>
    <div class="space-y-4">
        ${todayAppointments.slice(0, 8).map((record) => {
        const doctor = getDoctorById(record.doctor_id);
        const dept = getDepartmentById(record.department_id);
        const priorityClass = record.priority === 'high' ? 'high' : record.priority === 'medium' ? 'medium' : 'normal';
        
        return `
            <div class="glass-advanced rounded-xl p-6 flex items-center justify-between priority-visual ${priorityClass} data-update-animation card-intelligent" style="cursor: pointer;" onclick="openModal('view-details', allRecords.find(r => r.__backendId === '${record.__backendId}'))">
            <div class="flex items-center space-x-6 flex-1">
                <div class="queue-display" style="font-size: ${baseSize * 1.5}px; min-width: 70px;">
                #${record.queue_number}
                </div>
                <div style="font-size: ${baseSize * 1.25}px; font-weight: 800; color: ${primaryColor}; min-width: 80px; font-family: 'JetBrains Mono', monospace;">${record.appointment_time}</div>
                <div class="flex-1">
                <div style="font-size: ${baseSize * 1.125}px; font-weight: 700; margin-bottom: 0.375rem;">${record.patient_name}</div>
                <div style="font-size: ${baseSize * 0.9375}px; opacity: 0.75;">${doctor?.name || 'N/A'} • ${dept?.name || 'N/A'}</div>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <span class="status-intelligent border ${getStatusColor(record.status)}">
                <span class="status-dot-intelligent" style="background: ${getStatusDotColor(record.status)};"></span>
                ${record.status}
                </span>
            </div>
            </div>
        `;
        }).join('') || `<div class="text-center py-16" style="opacity: 0.5; font-size: ${baseSize * 1.125}px;">No appointments scheduled for today</div>`}
    </div>
    </div>
</div>
`;
}

function renderAdminAppointments(config, baseSize, textColor, primaryColor) {
const filteredRecords = getFilteredRecords();
const statusCounts = {
all: allRecords.length,
scheduled: allRecords.filter(r => r.status === 'scheduled').length,
waiting: allRecords.filter(r => r.status === 'waiting').length,
'in-consultation': allRecords.filter(r => r.status === 'in-consultation').length,
completed: allRecords.filter(r => r.status === 'completed').length
};

return `
<div class="space-y-6">
    <div class="glass-advanced rounded-2xl p-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
        <label for="search-input" style="display: block; font-size: ${baseSize * 0.875}px; font-weight: 700; margin-bottom: 0.625rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Search</label>
        <input type="text" id="search-input" placeholder="Name, email, phone..." value="${searchQuery}"
            oninput="searchQuery=this.value; renderApp();" class="input-premium w-full px-5 py-3.5 rounded-xl" style="font-size: ${baseSize}px;">
        </div>
        <div>
        <label for="filter-status" style="display: block; font-size: ${baseSize * 0.875}px; font-weight: 700; margin-bottom: 0.625rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Status</label>
        <select id="filter-status" onchange="filterStatus=this.value; renderApp();" class="input-premium w-full px-5 py-3.5 rounded-xl" style="font-size: ${baseSize}px;">
            <option value="all" ${filterStatus === 'all' ? 'selected' : ''}>All (${statusCounts.all})</option>
            <option value="scheduled" ${filterStatus === 'scheduled' ? 'selected' : ''}>Scheduled (${statusCounts.scheduled})</option>
            <option value="waiting" ${filterStatus === 'waiting' ? 'selected' : ''}>Waiting (${statusCounts.waiting})</option>
            <option value="in-consultation" ${filterStatus === 'in-consultation' ? 'selected' : ''}>In Consultation (${statusCounts['in-consultation']})</option>
            <option value="completed" ${filterStatus === 'completed' ? 'selected' : ''}>Completed (${statusCounts.completed})</option>
        </select>
        </div>
        <div>
        <label for="filter-branch" style="display: block; font-size: ${baseSize * 0.875}px; font-weight: 700; margin-bottom: 0.625rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Branch</label>
        <select id="filter-branch" onchange="filterBranch=this.value; renderApp();" class="input-premium w-full px-5 py-3.5 rounded-xl" style="font-size: ${baseSize}px;">
            <option value="all">All Branches</option>
            ${hospitalBranches.map(b => `<option value="${b.id}" ${filterBranch === b.id ? 'selected' : ''}>${b.name}</option>`).join('')}
        </select>
        </div>
        <div>
        <label for="sort-by" style="display: block; font-size: ${baseSize * 0.875}px; font-weight: 700; margin-bottom: 0.625rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Sort By</label>
        <select id="sort-by" onchange="sortBy=this.value; renderApp();" class="input-premium w-full px-5 py-3.5 rounded-xl" style="font-size: ${baseSize}px;">
            <option value="date" ${sortBy === 'date' ? 'selected' : ''}>Date & Time</option>
            <option value="priority" ${sortBy === 'priority' ? 'selected' : ''}>Priority</option>
        </select>
        </div>
    </div>
    </div>

    <div style="font-size: ${baseSize * 0.9375}px; opacity: 0.75; font-weight: 600;">
    Showing ${filteredRecords.length} appointment${filteredRecords.length !== 1 ? 's' : ''}
    </div>

    <div class="space-y-4">
    ${filteredRecords.map(record => {
        const doctor = getDoctorById(record.doctor_id);
        const dept = getDepartmentById(record.department_id);
        const branch = getBranchById(record.branch_id);
        const priorityClass = record.priority === 'high' ? 'high' : record.priority === 'medium' ? 'medium' : 'normal';
        const modeData = consultationModes.find(m => m.id === record.consultation_mode);
        
        return `
        <div class="glass-advanced rounded-2xl p-6 priority-visual ${priorityClass} data-update-animation card-intelligent">
            <div class="flex justify-between items-start mb-5">
            <div class="flex-1">
                <div class="flex items-center gap-4 mb-3">
                <div class="queue-display" style="font-size: ${baseSize * 1.25}px;">#{record.queue_number}</div>
                <h3 style="font-size: ${baseSize * 1.375}px; font-weight: 800;">${record.patient_name}</h3>
                <span class="status-intelligent border ${getStatusColor(record.status)}">
                    <span class="status-dot-intelligent" style="background: ${getStatusDotColor(record.status)};"></span>
                    ${record.status}
                </span>
                ${modeData ? `<span class="consultation-badge ${record.consultation_mode}">${modeData.icon} ${modeData.name}</span>` : ''}
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div style="font-size: ${baseSize * 0.9375}px;"><span style="opacity: 0.6; font-weight: 600;">Date:</span> <span style="font-weight: 700;">${record.appointment_date}</span></div>
                <div style="font-size: ${baseSize * 0.9375}px;"><span style="opacity: 0.6; font-weight: 600;">Time:</span> <span style="font-weight: 700; font-family: 'JetBrains Mono', monospace;">${record.appointment_time}</span></div>
                <div style="font-size: ${baseSize * 0.9375}px;"><span style="opacity: 0.6; font-weight: 600;">Doctor:</span> <span style="font-weight: 700;">${doctor?.name || 'N/A'}</span></div>
                <div style="font-size: ${baseSize * 0.9375}px;"><span style="opacity: 0.6; font-weight: 600;">Department:</span> <span style="font-weight: 700;">${dept?.name || 'N/A'}</span></div>
                </div>
            </div>
            </div>
            <div class="flex flex-wrap gap-3 pt-5 border-t border-white/10">
            ${record.status === 'scheduled' ? `<button onclick="updateAppointmentStatus(allRecords.find(r => r.__backendId === '${record.__backendId}'), 'waiting')" class="btn-contextual px-5 py-2.5 rounded-xl" style="background: ${primaryColor}; color: white; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;"><span style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;">${icons.clock}</span>Check In</button>` : ''}
            ${record.status === 'waiting' ? `<button onclick="updateAppointmentStatus(allRecords.find(r => r.__backendId === '${record.__backendId}'), 'in-consultation')" class="btn-contextual px-5 py-2.5 rounded-xl" style="background: #8b5cf6; color: white; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;"><span style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;">${icons.message}</span>Start Consultation</button>` : ''}
            ${record.status === 'in-consultation' ? `<button onclick="updateAppointmentStatus(allRecords.find(r => r.__backendId === '${record.__backendId}'), 'completed')" class="btn-contextual px-5 py-2.5 rounded-xl" style="background: #10b981; color: white; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;"><span style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;">${icons.checkCircle}</span>Complete</button>` : ''}
            <button onclick="openModal('view-details', allRecords.find(r => r.__backendId === '${record.__backendId}'))" class="btn-contextual px-5 py-2.5 rounded-xl glass-advanced" style="font-weight: 600; display: flex; align-items: center; gap: 0.5rem;"><span style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;">${icons.book}</span>View Details</button>
            ${record.status !== 'completed' ? `<button onclick="openModal('delete-appointment', allRecords.find(r => r.__backendId === '${record.__backendId}'))" class="btn-contextual px-5 py-2.5 rounded-xl" style="background: rgba(239, 68, 68, 0.15); color: #fca5a5; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;"><span style="width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; opacity: 0.8;">${icons.settings}</span>Delete</button>` : ''}
            </div>
        </div>
        `;
    }).join('') || `<div class="glass-advanced rounded-2xl p-16 text-center" style="opacity: 0.5; font-size: ${baseSize * 1.25}px;">No appointments found</div>`}
    </div>
</div>
`;
}

function renderAdminAnalytics(config, baseSize, textColor, primaryColor) {
const analytics = getAnalytics();
const maxDeptCount = Math.max(...analytics.byDepartment.map(d => d.count), 1);

return `
<div class="space-y-8">
    <h2 style="font-size: ${baseSize * 2}px; font-weight: 900;">Advanced Analytics & Insights</h2>

    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
    ${[
        { label: 'Scheduled', value: analytics.byStatus.scheduled, color: '#3b82f6', icon: 'book' },
        { label: 'Waiting', value: analytics.byStatus.waiting, color: '#f59e0b', icon: 'clock' },
        { label: 'In Progress', value: analytics.byStatus.inConsultation, color: '#8b5cf6', icon: 'message' },
        { label: 'Completed', value: analytics.byStatus.completed, color: '#10b981', icon: 'checkCircle' },
        { label: 'Cancelled', value: analytics.byStatus.cancelled, color: '#ef4444', icon: 'settings' }
    ].map(stat => `
        <div class="glass-advanced rounded-xl p-6 text-center card-intelligent">
        <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.625rem; color: ${stat.color};">${icons[stat.icon]}</div>
        <div class="stat-counter" style="font-size: ${baseSize * 2.25}px; font-weight: 900; color: ${stat.color}; margin-bottom: 0.625rem;">${stat.value}</div>
        <div style="font-size: ${baseSize * 0.75}px; opacity: 0.75; font-weight: 700; text-transform: uppercase;">${stat.label}</div>
        </div>
    `).join('')}
    </div>

    <div class="glass-advanced rounded-2xl p-8">
    <h3 style="font-size: ${baseSize * 1.75}px; font-weight: 800; margin-bottom: 2rem;">Department Performance</h3>
    <div class="space-y-6">
        ${analytics.byDepartment.sort((a, b) => b.count - a.count).map(dept => {
        const percentage = maxDeptCount > 0 ? (dept.count / maxDeptCount) * 100 : 0;
        return `
            <div>
            <div class="flex justify-between items-center mb-3">
                <span style="font-size: ${baseSize * 1.0625}px; font-weight: 700;">${dept.name}</span>
                <span style="font-size: ${baseSize * 1.25}px; font-weight: 900; color: ${dept.color};">${dept.count}</span>
            </div>
            <div style="width: 100%; height: 18px; background: rgba(255,255,255,0.05); border-radius: 9px; overflow: hidden;">
                <div class="chart-bar-intelligent" style="width: ${percentage}%; height: 100%; background: linear-gradient(90deg, ${dept.color}, ${dept.color}dd);"></div>
            </div>
            </div>
        `;
        }).join('')}
    </div>
    </div>
</div>
`;
}

function renderAdminQueue(config, baseSize, textColor, primaryColor) {
const today = new Date().toISOString().split('T')[0];
const todayAppointments = allRecords.filter(r => r.appointment_date === today && r.status !== 'completed' && r.status !== 'cancelled');
const queueByDoctor = {};

todayAppointments.forEach(apt => {
if (!queueByDoctor[apt.doctor_id]) queueByDoctor[apt.doctor_id] = [];
queueByDoctor[apt.doctor_id].push(apt);
});

return `
<div class="space-y-8">
    <div>
    <h2 style="font-size: ${baseSize * 2}px; font-weight: 900; margin-bottom: 0.5rem;">Live Queue Management</h2>
    <p style="font-size: ${baseSize * 1.0625}px; opacity: 0.75;">Real-time patient queue tracking</p>
    </div>

    ${Object.keys(queueByDoctor).length === 0 ? `
    <div class="glass-advanced rounded-2xl p-16 text-center" style="opacity: 0.5;">
        <div style="width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; opacity: 0.5;">${icons.clock}</div>
        <div style="font-size: ${baseSize * 1.25}px; font-weight: 700;">No active queue today</div>
    </div>
    ` : ''}

    ${Object.entries(queueByDoctor).map(([doctorId, appointments]) => {
    const doctor = getDoctorById(doctorId);
    const dept = getDepartmentById(doctor?.department);
    const waiting = appointments.filter(a => a.status === 'waiting');
    const inConsultation = appointments.filter(a => a.status === 'in-consultation');

    return `
        <div class="glass-advanced rounded-2xl p-8 card-intelligent">
        <div class="flex justify-between items-start mb-6">
            <div>
            <h3 style="font-size: ${baseSize * 1.5}px; font-weight: 800; margin-bottom: 0.5rem;">${doctor?.name || 'Unknown Doctor'}</h3>
            <p style="font-size: ${baseSize * 0.9375}px; opacity: 0.75; font-weight: 600;">${dept?.name || 'N/A'} • ${doctor?.specialization || ''}</p>
            </div>
            <div class="flex gap-4">
            <div class="text-center glass-advanced px-4 py-3 rounded-xl">
                <div style="font-size: ${baseSize * 1.5}px; font-weight: 900; color: #f59e0b;">${waiting.length}</div>
                <div style="font-size: ${baseSize * 0.7}px; opacity: 0.7; font-weight: 700;">WAITING</div>
            </div>
            <div class="text-center glass-advanced px-4 py-3 rounded-xl">
                <div style="font-size: ${baseSize * 1.5}px; font-weight: 900; color: #8b5cf6;">${inConsultation.length}</div>
                <div style="font-size: ${baseSize * 0.7}px; opacity: 0.7; font-weight: 700;">IN CONSULTATION</div>
            </div>
            </div>
        </div>

        <div class="space-y-3">
            ${appointments.sort((a, b) => a.queue_number - b.queue_number).map(apt => {
            const priorityClass = apt.priority === 'high' ? 'high' : apt.priority === 'medium' ? 'medium' : 'normal';
            return `
                <div class="glass-advanced rounded-xl p-5 flex items-center justify-between priority-visual ${priorityClass} data-update-animation">
                <div class="flex items-center gap-6 flex-1">
                    <div class="queue-display" style="font-size: ${baseSize * 1.75}px; min-width: 70px;">
                    #${apt.queue_number}
                    </div>
                    <div style="font-size: ${baseSize * 1.125}px; font-weight: 800; color: ${primaryColor}; min-width: 80px; font-family: 'JetBrains Mono', monospace;">${apt.appointment_time}</div>
                    <div class="flex-1">
                    <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700; margin-bottom: 0.25rem;">${apt.patient_name}</div>
                    <div style="font-size: ${baseSize * 0.875}px; opacity: 0.75;">${apt.consultation_type}</div>
                    </div>
                </div>
                <span class="status-intelligent border ${getStatusColor(apt.status)}">
                    <span class="status-dot-intelligent" style="background: ${getStatusDotColor(apt.status)};"></span>
                    ${apt.status}
                </span>
                </div>
            `;
            }).join('')}
        </div>
        </div>
    `;
    }).join('')}
</div>
`;
}

function renderModals() {
if (!showModal) return '';

const config = window.elementSdk?.config || defaultConfig;
const baseSize = config.font_size || defaultConfig.font_size;
const textColor = config.text_color || defaultConfig.text_color;
const primaryColor = config.primary_action_color || defaultConfig.primary_action_color;

let modalContent = '';

if (modalType === 'admin-login') {
modalContent = renderAdminLoginModal(config, baseSize, textColor, primaryColor);
} else if (modalType === 'book-appointment') {
modalContent = renderBookingModal(config, baseSize, textColor, primaryColor);
} else if (modalType === 'view-details' && selectedRecord) {
modalContent = renderDetailsModal(config, baseSize, textColor, primaryColor);
} else if (modalType === 'delete-appointment' && selectedRecord) {
modalContent = renderDeleteModal(config, baseSize, textColor, primaryColor);
}

return `
<div class="modal-overlay-advanced fixed inset-0 flex items-center justify-center p-6 z-50" onclick="closeModal();">
    ${modalContent}
</div>
`;
}

function renderAdminLoginModal(config, baseSize, textColor, primaryColor) {
return `
<div class="glass-advanced rounded-2xl p-10 max-w-lg w-full modal-content-advanced" onclick="event.stopPropagation();">
    <h3 style="font-size: ${baseSize * 2}px; font-weight: 900; margin-bottom: 2rem;">Staff Portal Access</h3>
    <form onsubmit="event.preventDefault(); handleAdminLogin(this.password.value);">
    <div class="mb-6">
        <label for="admin-password" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Password</label>
        <input type="password" id="admin-password" name="password" required class="input-premium w-full px-6 py-4 rounded-xl" placeholder="Enter access code" style="font-size: ${baseSize * 1.0625}px;">
    </div>
    <div class="glass-advanced border-l-4 p-5 mb-6 rounded-xl" style="border-color: ${primaryColor}; background: rgba(59, 130, 246, 0.08); font-size: ${baseSize * 0.9375}px;">
        <div style="font-weight: 700; margin-bottom: 0.5rem;">Demo Credentials:</div>
        <div>Administrator: <code style="background: rgba(0,0,0,0.3); padding: 0.25rem 0.5rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace;">admin2024</code></div>
        <div>Doctor: <code style="background: rgba(0,0,0,0.3); padding: 0.25rem 0.5rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace;">doctor2024</code></div>
        <div>Staff: <code style="background: rgba(0,0,0,0.3); padding: 0.25rem 0.5rem; border-radius: 4px; font-family: 'JetBrains Mono', monospace;">staff2024</code></div>
    </div>
    <div class="flex gap-4">
        <button type="button" onclick="closeModal();" class="flex-1 btn-contextual px-6 py-4 rounded-xl glass-advanced" style="font-weight: 700;">Cancel</button>
        <button type="submit" class="flex-1 btn-contextual px-6 py-4 rounded-xl" style="background: ${primaryColor}; color: white; font-weight: 700;">Login</button>
    </div>
    </form>
</div>
`;
}

function renderBookingModal(config, baseSize, textColor, primaryColor) {
const availableDoctors = doctors.filter(d => (!bookingFormData.department || d.department === bookingFormData.department) && (!bookingFormData.branch || d.branches.includes(bookingFormData.branch)));

return `
<div class="glass-advanced rounded-2xl p-10 max-w-4xl w-full modal-content-advanced max-h-[90%] overflow-y-auto scroll-custom" onclick="event.stopPropagation();">
    <h3 style="font-size: ${baseSize * 2}px; font-weight: 900; margin-bottom: 2rem;">Book Appointment</h3>
    
    <div class="step-indicator mb-8">
    <div class="step-circle ${bookingStep >= 1 ? 'active' : 'inactive'}">1</div>
    <div class="step-line ${bookingStep >= 2 ? 'active' : ''}"></div>
    <div class="step-circle ${bookingStep >= 2 ? 'active' : 'inactive'}">2</div>
    <div class="step-line ${bookingStep >= 3 ? 'active' : ''}"></div>
    <div class="step-circle ${bookingStep >= 3 ? 'active' : 'inactive'}">3</div>
    </div>

    <form onsubmit="event.preventDefault(); if(bookingStep === 3) { createAppointment(bookingFormData); }">
    ${bookingStep === 1 ? `
        <div class="space-y-6">
        <div>
            <label style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Select Branch</label>
            <div class="grid grid-cols-2 gap-4">
            ${hospitalBranches.map(branch => `
                <button type="button" onclick="bookingFormData.branch='${branch.id}'; renderApp();" class="glass-advanced rounded-xl p-6 text-left ${bookingFormData.branch === branch.id ? 'border-2' : ''}" style="${bookingFormData.branch === branch.id ? `border-color: ${primaryColor};` : ''}">
                <div style="font-size: ${baseSize * 1.25}px; font-weight: 700; margin-bottom: 0.5rem;">${branch.name}</div>
                <div style="font-size: ${baseSize * 0.875}px; opacity: 0.75;">${branch.city}</div>
                </button>
            `).join('')}
            </div>
        </div>

        <div>
            <label style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Select Department</label>
            <div class="grid grid-cols-2 gap-4">
            ${departments.map(dept => `
                <button type="button" onclick="bookingFormData.department='${dept.id}'; renderApp();" class="glass-advanced rounded-xl p-6 text-left flex items-center gap-4 ${bookingFormData.department === dept.id ? 'border-2' : ''}" style="${bookingFormData.department === dept.id ? `border-color: ${primaryColor};` : ''}">
                <div style="font-size: ${baseSize * 2}px;">${dept.icon}</div>
                <div class="flex-1">
                    <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700;">${dept.name}</div>
                    <div style="font-size: ${baseSize * 0.8125}px; opacity: 0.75;">${doctors.filter(d => d.department === dept.id).length} doctors</div>
                </div>
                </button>
            `).join('')}
            </div>
        </div>

        <div>
            <label style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Select Doctor</label>
            <div class="space-y-3">
            ${availableDoctors.map(doctor => `
                <button type="button" onclick="bookingFormData.doctor='${doctor.id}'; renderApp();" class="glass-advanced rounded-xl p-6 w-full text-left flex items-center justify-between ${bookingFormData.doctor === doctor.id ? 'border-2' : ''}" style="${bookingFormData.doctor === doctor.id ? `border-color: ${primaryColor};` : ''}">
                <div class="flex-1">
                    <div style="font-size: ${baseSize * 1.125}px; font-weight: 700; margin-bottom: 0.375rem;">${doctor.name}</div>
                    <div style="font-size: ${baseSize * 0.875}px; opacity: 0.75;">${doctor.specialization} • ${doctor.experience} years experience</div>
                </div>
                <div class="text-right">
                    <div style="font-size: ${baseSize * 1.125}px; font-weight: 800; color: ${primaryColor};">৳${doctor.fee}</div>
                    <div style="font-size: ${baseSize * 0.75}px; opacity: 0.75;">⭐ ${doctor.rating}</div>
                </div>
                </button>
            `).join('')}
            </div>
        </div>
        </div>
    ` : bookingStep === 2 ? `
        <div class="space-y-6">
        <div class="grid grid-cols-2 gap-6">
            <div>
            <label for="appt-date" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Appointment Date</label>
            <input type="date" id="appt-date" required value="${bookingFormData.date}" min="${new Date().toISOString().split('T')[0]}" oninput="bookingFormData.date=this.value; renderApp();" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
            </div>
            <div>
            <label for="appt-time" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Time Slot</label>
            <select id="appt-time" required onchange="bookingFormData.time=this.value; renderApp();" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
                <option value="">Select time</option>
                ${timeSlots.map(slot => `<option value="${slot}" ${bookingFormData.time === slot ? 'selected' : ''}>${slot}</option>`).join('')}
            </select>
            </div>
        </div>

        <div>
            <label style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Consultation Type</label>
            <div class="grid grid-cols-3 gap-4">
            ${consultationTypes.map(type => `
                <button type="button" onclick="bookingFormData.consultationType='${type.id}'; renderApp();" class="glass-advanced rounded-xl p-6 text-center ${bookingFormData.consultationType === type.id ? 'border-2' : ''}" style="${bookingFormData.consultationType === type.id ? `border-color: ${primaryColor};` : ''}">
                <div style="font-size: ${baseSize * 2}px; margin-bottom: 0.75rem;">${type.icon}</div>
                <div style="font-size: ${baseSize * 0.875}px; font-weight: 700;">${type.name}</div>
                </button>
            `).join('')}
            </div>
        </div>

        <div>
            <label style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Consultation Mode</label>
            <div class="space-y-3">
            ${consultationModes.map(mode => `
                <button type="button" onclick="bookingFormData.consultationMode='${mode.id}'; renderApp();" class="glass-advanced rounded-xl p-6 w-full text-left flex items-center gap-4 ${bookingFormData.consultationMode === mode.id ? 'border-2' : ''}" style="${bookingFormData.consultationMode === mode.id ? `border-color: ${primaryColor};` : ''}">
                <div style="font-size: ${baseSize * 2.5}px;">${mode.icon}</div>
                <div class="flex-1">
                    <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700; margin-bottom: 0.375rem;">${mode.name}</div>
                    <div style="font-size: ${baseSize * 0.875}px; opacity: 0.75;">${mode.description}</div>
                </div>
                </button>
            `).join('')}
            </div>
        </div>
        </div>
    ` : `
        <div class="space-y-6">
        <div class="grid grid-cols-2 gap-6">
            <div>
            <label for="patient-name" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Full Name *</label>
            <input type="text" id="patient-name" required value="${bookingFormData.name}" oninput="bookingFormData.name=this.value" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
            </div>
            <div>
            <label for="patient-email" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Email *</label>
            <input type="email" id="patient-email" required value="${bookingFormData.email}" oninput="bookingFormData.email=this.value" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
            </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
            <div>
            <label for="patient-phone" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Phone *</label>
            <input type="tel" id="patient-phone" required value="${bookingFormData.phone}" oninput="bookingFormData.phone=this.value" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
            </div>
            <div>
            <label for="patient-age" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Age *</label>
            <input type="number" id="patient-age" required value="${bookingFormData.age}" oninput="bookingFormData.age=this.value" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
            </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
            <div>
            <label for="patient-gender" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Gender *</label>
            <select id="patient-gender" required onchange="bookingFormData.gender=this.value" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
                <option value="">Select</option>
                <option value="Male" ${bookingFormData.gender === 'Male' ? 'selected' : ''}>Male</option>
                <option value="Female" ${bookingFormData.gender === 'Female' ? 'selected' : ''}>Female</option>
                <option value="Other" ${bookingFormData.gender === 'Other' ? 'selected' : ''}>Other</option>
            </select>
            </div>
            <div>
            <label for="patient-blood" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Blood Group</label>
            <select id="patient-blood" onchange="bookingFormData.bloodGroup=this.value" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
                <option value="">Select</option>
                ${bloodGroups.map(group => `<option value="${group}" ${bookingFormData.bloodGroup === group ? 'selected' : ''}>${group}</option>`).join('')}
            </select>
            </div>
        </div>

        <div>
            <label for="patient-nid" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">NID/Passport Number</label>
            <input type="text" id="patient-nid" value="${bookingFormData.nid}" oninput="bookingFormData.nid=this.value" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;">
        </div>

        <div>
            <label for="patient-symptoms" style="display: block; font-size: ${baseSize}px; font-weight: 700; margin-bottom: 1rem;">Symptoms/Reason for Visit</label>
            <textarea id="patient-symptoms" rows="3" value="${bookingFormData.symptoms}" oninput="bookingFormData.symptoms=this.value" class="input-premium w-full px-5 py-4 rounded-xl" style="font-size: ${baseSize}px;"></textarea>
        </div>
        </div>
    `}

    <div class="flex gap-4 mt-8">
        ${bookingStep > 1 ? `<button type="button" onclick="prevBookingStep();" class="flex-1 btn-contextual px-6 py-4 rounded-xl glass-advanced" style="font-weight: 700;">← Previous</button>` : ''}
        <button type="button" onclick="closeModal();" class="flex-1 btn-contextual px-6 py-4 rounded-xl glass-advanced" style="font-weight: 700;">Cancel</button>
        ${bookingStep < 3 ? `
        <button type="button" onclick="nextBookingStep();" class="flex-1 btn-contextual px-6 py-4 rounded-xl" style="background: ${primaryColor}; color: white; font-weight: 700;">Next →</button>
        ` : `
        <button type="submit" class="flex-1 btn-contextual px-6 py-4 rounded-xl" style="background: ${primaryColor}; color: white; font-weight: 700;">Book Appointment</button>
        `}
    </div>
    </form>
</div>
`;
}

function renderDetailsModal(config, baseSize, textColor, primaryColor) {
const doctor = getDoctorById(selectedRecord.doctor_id);
const dept = getDepartmentById(selectedRecord.department_id);
const branch = getBranchById(selectedRecord.branch_id);

return `
<div class="glass-advanced rounded-2xl p-10 max-w-3xl w-full modal-content-advanced max-h-[90%] overflow-y-auto scroll-custom" onclick="event.stopPropagation();">
    <h3 style="font-size: ${baseSize * 2}px; font-weight: 900; margin-bottom: 2rem;">Appointment Details</h3>
    
    <div class="space-y-6">
    <div class="glass-advanced rounded-xl p-6">
        <div style="font-size: ${baseSize * 0.875}px; opacity: 0.7; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Patient Information</div>
        <div class="grid grid-cols-2 gap-6">
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Name</div>
            <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700;">${selectedRecord.patient_name}</div>
        </div>
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Age/Gender</div>
            <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700;">${selectedRecord.patient_age} years / ${selectedRecord.patient_gender}</div>
        </div>
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Email</div>
            <div style="font-size: ${baseSize * 0.9375}px; font-weight: 600; font-family: 'JetBrains Mono', monospace;">${selectedRecord.patient_email}</div>
        </div>
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Phone</div>
            <div style="font-size: ${baseSize * 0.9375}px; font-weight: 600; font-family: 'JetBrains Mono', monospace;">${selectedRecord.patient_phone}</div>
        </div>
        ${selectedRecord.patient_blood_group ? `
            <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Blood Group</div>
            <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700; color: ${primaryColor};">${selectedRecord.patient_blood_group}</div>
            </div>
        ` : ''}
        ${selectedRecord.patient_nid ? `
            <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">NID</div>
            <div style="font-size: ${baseSize * 0.9375}px; font-weight: 600; font-family: 'JetBrains Mono', monospace;">${selectedRecord.patient_nid}</div>
            </div>
        ` : ''}
        </div>
    </div>

    <div class="glass-advanced rounded-xl p-6">
        <div style="font-size: ${baseSize * 0.875}px; opacity: 0.7; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Appointment Details</div>
        <div class="grid grid-cols-2 gap-6">
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Date & Time</div>
            <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700;">${selectedRecord.appointment_date} at ${selectedRecord.appointment_time}</div>
        </div>
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Queue Number</div>
            <div class="queue-display" style="font-size: ${baseSize * 1.5}px;">#${selectedRecord.queue_number}</div>
        </div>
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Doctor</div>
            <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700;">${doctor?.name || 'N/A'}</div>
        </div>
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Department</div>
            <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700;">${dept?.name || 'N/A'}</div>
        </div>
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Branch</div>
            <div style="font-size: ${baseSize * 1.0625}px; font-weight: 700;">${branch?.name || 'N/A'}</div>
        </div>
        <div>
            <div style="font-size: ${baseSize * 0.875}px; opacity: 0.6; margin-bottom: 0.375rem;">Status</div>
            <span class="status-intelligent border ${getStatusColor(selectedRecord.status)}">
            <span class="status-dot-intelligent" style="background: ${getStatusDotColor(selectedRecord.status)};"></span>
            ${selectedRecord.status}
            </span>
        </div>
        </div>
    </div>

    ${selectedRecord.symptoms ? `
        <div class="glass-advanced rounded-xl p-6">
        <div style="font-size: ${baseSize * 0.875}px; opacity: 0.7; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Symptoms</div>
        <div style="font-size: ${baseSize * 1.0625}px; line-height: 1.6;">${selectedRecord.symptoms}</div>
        </div>
    ` : ''}
    </div>

    <div class="flex gap-4 mt-8">
    <button onclick="closeModal();" class="flex-1 btn-contextual px-6 py-4 rounded-xl glass-advanced" style="font-weight: 700;">Close</button>
    </div>
</div>
`;
}

function renderDeleteModal(config, baseSize, textColor, primaryColor) {
return `
<div class="glass-advanced rounded-2xl p-10 max-w-lg w-full modal-content-advanced" onclick="event.stopPropagation();">
    <h3 style="font-size: ${baseSize * 2}px; font-weight: 900; margin-bottom: 2rem; color: #fca5a5;">Delete Appointment?</h3>
    <p style="font-size: ${baseSize * 1.125}px; margin-bottom: 2rem; line-height: 1.6;">Are you sure you want to delete the appointment for <strong>${selectedRecord.patient_name}</strong> on ${selectedRecord.appointment_date} at ${selectedRecord.appointment_time}? This action cannot be undone.</p>
    <div class="flex gap-4">
    <button onclick="closeModal();" class="flex-1 btn-contextual px-6 py-4 rounded-xl glass-advanced" style="font-weight: 700;">Cancel</button>
    <button onclick="deleteAppointment(selectedRecord);" class="flex-1 btn-contextual px-6 py-4 rounded-xl" style="background: #ef4444; color: white; font-weight: 700;">Delete</button>
    </div>
</div>
`;
}

async function onConfigChange(config) {
renderApp();
}

async function init() {
// Mock data SDK if not available
if (!window.dataSdk) {
window.dataSdk = {
    init: async (handler) => {
    allRecords = [];
    return { isOk: true };
    },
    create: async (data) => {
    allRecords.push({ ...data, __backendId: Date.now().toString() });
    return { isOk: true };
    },
    update: async (data) => {
    const index = allRecords.findIndex(r => r.__backendId === data.__backendId);
    if (index !== -1) allRecords[index] = data;
    return { isOk: true };
    },
    delete: async (data) => {
    allRecords = allRecords.filter(r => r.__backendId !== data.__backendId);
    return { isOk: true };
    }
};
}

const initResult = await window.dataSdk.init({
onDataChanged(data) {
    allRecords = data;
    renderApp();
}
});

if (!initResult.isOk) {
showToast('Failed to initialize data system', 'error');
}

renderApp();
}

init();
