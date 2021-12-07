import home from '../components/admin/AdminHome';
import RecruiterList from '../components/admin/recruiter/RecruiterList';
import RecruiterEdit from '../components/admin/recruiter/RecruiterEdit';
import JobList from '../components/admin/recruiter/JobList';
import JobEdit from '../components/admin/recruiter/JobEdit';
import JobDetail from '../components/admin/recruiter/JobDetail';
import JobApplyList from '../components/admin/recruiter/JobApplyList';
import ScoutedList from '../components/admin/recruiter/ScoutedList';
import AdminPasswordSetting from '../components/admin/AdminPasswordSetting';
import PaymentManagement from '../components/admin/recruiter/PaymentManagement';
import JobSeekerList from '../components/admin/jobseeker/JobSeekerList';
import Invoice from '../components/admin/recruiter/Invoice';
import JobSeekerProfileEdit from '../components/admin/jobseeker/JobSeekerProfileEdit';
import RecruiterProfileDetail from '../components/admin/recruiter/RecruiterProfileDetail';
import AdminSetting from '../components/admin/setting/AdminSetting';
const route = [{
        path: '/',
        component: home,
        name: 'Dashboard',
        meta: {
            reqiuresAuth: true,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/recruiter-list',
        component: RecruiterList,
        name: "RecruiterList",
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/recruiter-list/:id/edit',
        component: RecruiterEdit,
        name: "RecruiterEdit",
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/job-list',
        name: 'job-list',
        component: JobList,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/job-list/:id/edit',
        name: 'JobEdit',
        component: JobEdit,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/jobapply-list',
        component: JobApplyList,
        name: "JobApplyList",
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/scouted-list',
        component: ScoutedList,
        name: "ScoutedList",
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/payment-management',
        component: PaymentManagement,
        name: "PaymentManagement",
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/jobseeker-list',
        name:'jobseekerList',
        component: JobSeekerList,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/invoice',
        component: Invoice,
        name: "Invoice",
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        path: '/admin/password-setting',
        component: AdminPasswordSetting,
        name: "AdminPasswordSetting",
        meta: {
            reqiuresAuth: true,
            admin: true, // for only admin component
        }
    },
    {
        path: '/admin/jobseeker-list/:id/edit',
        name: 'JobseekerEdit',
        component: JobSeekerProfileEdit,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        name: 'recruiter-job-detail',
        path: '/job-list/:id/detail',
        component: JobDetail,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        name: 'scout-job',
        path: '/job-list/scout/:id/detail',
        component: JobDetail,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        name: 'jobseeker-detail',
        path: '/admin/jobseeker-list/jobseeker/:id/detail',
        component: JobSeekerProfileEdit,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        name: 'recruiter-detail',
        path: '/admin/recruiter-list/recruiter/:id/detail',
        component: RecruiterProfileDetail,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
    {
        name: 'admin-setting',
        path: '/admin/admin-setting',
        component: AdminSetting,
        meta: {
            reqiuresAuth: false,
            admin: true, // for only admin component
            jobseeker: false
        }
    },
];

export default route;