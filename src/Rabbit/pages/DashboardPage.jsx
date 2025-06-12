import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import MaterialUpload from '../components/dashboard/MaterialUpload';
import StudentList from '../components/dashboard/StudentList';
import AddStudent from '../components/dashboard/AddStudent';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DashboardPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Check if user is owner (simple implementation)
  const isOwner = true; // In real app, check from localStorage or backend

  if (!isOwner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Access Restricted</h2>
          <p className="text-gray-600 mb-6">
            Only farm owners can access this dashboard
          </p>
          <a 
            href="/" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl font-bold text-emerald-800"
          >
           Toheeb Rabbitry Management Dashboard
          </motion.h1>
          <p className="mt-2 text-gray-600">
            Manage your rabbit farm operations and training program
          </p>
        </div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex p-1 space-x-1 bg-emerald-100 rounded-xl mb-8 max-w-2xl mx-auto">
            {['Upload Materials', 'Students', 'Add Student'].map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-3 text-sm font-medium rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-emerald-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white shadow text-emerald-700'
                      : 'text-emerald-600 hover:bg-emerald-200'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels>
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <MaterialUpload />
              </motion.div>
            </Tab.Panel>
            
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <StudentList />
              </motion.div>
            </Tab.Panel>
            
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AddStudent />
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  );
};

export default DashboardPage;