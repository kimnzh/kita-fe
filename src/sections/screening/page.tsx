'use client';

import { useState } from 'react';
// import logo from '../../assets/logo.webp'; // If you're using Next.js Image, use the public folder
// import avatar from '../../assets/avatar.png'; // If you're using Next.js Image, use the public folder

// Placeholder for icons - replace with actual icon components if using a library
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);
const HistoryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z"
      clipRule="evenodd"
    />
  </svg>
);

interface Question {
  id: number;
  text: string;
  options: { value: string; label: string }[];
}

interface HistoryEntry {
  id: number;
  name: string;
  resultPercentage: number;
  resultDisease: string;
  date: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Apakah Anda pernah berhubungan seks tanpa kondom dalam 6 bulan terakhir?',
    options: [
      { value: 'yes', label: 'Ya' },
      { value: 'no', label: 'Tidak' },
      { value: 'not_applicable', label: 'Tidak relevan / Saya tidak aktif secara seksual' },
    ],
  },
  {
    id: 2,
    text: 'Dalam 3 bulan terakhir, apakah Anda memiliki lebih dari satu pasangan seksual?',
    options: [
      { value: 'yes', label: 'Ya' },
      { value: 'no', label: 'Tidak' },
    ],
  },
  {
    id: 3,
    text: 'Apakah Anda atau pasangan Anda pernah didiagnosis menderita IMS (Infeksi Menular Seksual) sebelumnya?',
    options: [
      { value: 'yes_me', label: 'Ya, saya pernah' },
      { value: 'yes_partner', label: 'Ya, pasangan saya pernah' },
      { value: 'no', label: 'Tidak' },
      { value: 'dont_know', label: 'Tidak tahu' },
    ],
  },
  {
    id: 4,
    text: 'Apakah Anda mengalami gejala seperti keputihan tidak biasa, nyeri saat buang air kecil, atau luka/benjolan di area kelamin?',
    options: [
      { value: 'yes', label: 'Ya' },
      { value: 'no', label: 'Tidak' },
      { value: 'unsure', label: 'Tidak yakin' },
    ],
  },
  {
    id: 5,
    text: 'Kapan terakhir kali Anda menjalani tes skrining IMS (misalnya, tes darah, tes urine, atau swab)?',
    options: [
      { value: 'less_than_6_months', label: 'Kurang dari 6 bulan lalu' },
      { value: '6_to_12_months', label: '6-12 bulan lalu' },
      { value: 'more_than_12_months', label: 'Lebih dari 12 bulan lalu' },
      { value: 'never', label: 'Belum pernah' },
    ],
  },
  {
    id: 6,
    text: 'Apakah Anda menggunakan narkoba suntik atau berbagi jarum suntik?',
    options: [
      { value: 'yes', label: 'Ya' },
      { value: 'no', label: 'Tidak' },
    ],
  },
  {
    id: 7,
    text: 'Apakah Anda memiliki kekhawatiran tentang paparan IMS dari aktivitas seksual apa pun (misalnya, seks oral, anal, atau vaginal)?',
    options: [
      { value: 'yes', label: 'Ya' },
      { value: 'no', label: 'Tidak' },
      { value: 'unsure', label: 'Tidak yakin' },
    ],
  },
  {
    id: 8,
    text: 'Apakah Anda menerima vaksinasi HPV (Human Papillomavirus) atau Hepatitis B?',
    options: [
      { value: 'yes_all', label: 'Ya, keduanya' },
      { value: 'yes_hpv', label: 'Ya, HPV saja' },
      { value: 'yes_hep_b', label: 'Ya, Hepatitis B saja' },
      { value: 'no', label: 'Tidak' },
    ],
  },
  {
    id: 9,
    text: 'Apakah Anda pernah mengalami kekerasan seksual atau dipaksa melakukan aktivitas seksual?',
    options: [
      { value: 'yes', label: 'Ya' },
      { value: 'no', label: 'Tidak' },
      { value: 'prefer_not_say', label: 'Lebih memilih tidak mengatakan' },
    ],
  },
];

type ScreenState = 'intro' | 'screening' | 'result' | 'history';

export default function ScreeningPage() {
  const [screenState, setScreenState] = useState<ScreenState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({}); // Stores answers by question ID
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: 1,
      name: 'Test 1',
      resultPercentage: 60,
      resultDisease: 'syphilis',
      date: '12/12/2025 10:51 PM', // Example date, will use current date for new entries
    },
    {
      id: 2,
      name: 'Test 2',
      resultPercentage: 30,
      resultDisease: 'gonorrhea',
      date: '01/05/2025 09:30 AM',
    },
  ]);

  const handleStartScreening = () => {
    setScreenState('screening');
    setCurrentQuestionIndex(0); // Reset to the first question
    setAnswers({}); // Clear previous answers
  };

  const handleOptionChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Simulate completing screening and getting a result
      const newEntry: HistoryEntry = {
        id: history.length > 0 ? Math.max(...history.map(h => h.id)) + 1 : 1,
        name: `Screening ${history.length + 1}`,
        resultPercentage: 60, // Hardcoded for demo, would be dynamic
        resultDisease: 'syphilis', // Hardcoded for demo, would be dynamic
        date: new Date().toLocaleString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      };
      setHistory((prev) => [...prev, newEntry]);
      setScreenState('result');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleBackToStart = () => {
    setScreenState('intro');
  };

  const handleDeleteHistory = (id: number) => {
    setHistory((prev) => prev.filter((entry) => entry.id !== id));
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A1931] text-white flex flex-col p-4 shadow-lg">
        <div className="flex items-center pl-4 mb-8">
          {/* Assuming logo.webp is in public folder or adjust path */}
          <img src="/logo.webp" alt="KITA Logo" className="h-8 w-auto mr-3" />
          <span className="text-2xl font-bold text-white">KITA</span>
        </div>
        <nav className="space-y-2">
          <button
            onClick={() => setScreenState('intro')}
            className={`flex items-center w-full text-left space-x-3 p-3 rounded-lg ${
              screenState === 'intro' ? 'bg-[#1F4287]' : 'hover:bg-[#1F4287]/70'
            }`}
          >
            <HomeIcon />
            <span>Home</span>
          </button>
          <button
            onClick={() => setScreenState('history')}
            className={`flex items-center w-full text-left space-x-3 p-3 rounded-lg ${
              screenState === 'history' ? 'bg-[#1F4287]' : 'hover:bg-[#1F4287]/70'
            }`}
          >
            <HistoryIcon />
            <span>History</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex justify-end items-center h-16 bg-white shadow-sm px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            {/* Assuming avatar.png is in public folder or adjust path */}
            <img
              src="/src/assets/avatar.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="text-gray-800 font-medium">AR. Jakir</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex items-center justify-center p-8 bg-gray-100">
          {screenState === 'intro' && (
            <div className="bg-white rounded-lg shadow-xl p-10 max-w-2xl w-full text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Form Screening</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mulai screening untuk mengetahui kemungkinan Anda terkena penyakit menular
                seksual dan mendapat rekomendasi penanganan.
              </p>
              <button
                onClick={handleStartScreening}
                className="bg-[#1F4287] hover:bg-[#1F4287]/90 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200"
              >
                Mulai
              </button>
            </div>
          )}

          {screenState === 'screening' && currentQuestion && (
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-xl p-8">
              {/* Left Section Navigation */}
              <div className="w-48 pr-8 border-r border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Section 1</h2>
                <div className="grid grid-cols-3 gap-2">
                  {questions.map((q, index) => (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestionIndex(index)}
                      className={`w-10 h-10 flex items-center justify-center rounded-md font-medium
                                  ${
                                    currentQuestionIndex === index
                                      ? 'bg-[#1F4287] text-white'
                                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                  }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Question Area */}
              <div className="flex-1 pl-8">
                <p className="text-md text-gray-500 mb-6">
                  Question {currentQuestionIndex + 1}/{questions.length}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {currentQuestion.text}
                </h3>
                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <label key={option.value} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={answers[currentQuestion.id] === option.value}
                        onChange={() =>
                          handleOptionChange(currentQuestion.id, option.value)
                        }
                        className="form-checkbox h-5 w-5 text-[#1F4287] rounded-md focus:ring-[#1F4287]"
                      />
                      <span className="ml-3 text-lg text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-[#1F4287] hover:bg-[#1F4287]/90 text-white rounded-lg font-medium transition duration-200"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}

          {screenState === 'result' && (
            <div className="bg-white rounded-lg shadow-xl p-10 max-w-2xl w-full text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Screening Menunjukkan Anda
              </h1>
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="8"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-red-500 progress-ring__circle stroke-current"
                    strokeWidth="8"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="251.2" /* 2 * PI * R (2*3.14*40 = 251.2) */
                    strokeDashoffset="100.48" /* 251.2 * (1 - 0.60) = 100.48 for 60% */
                  ></circle>
                  <text
                    x="50"
                    y="50"
                    fill="red"
                    className="text-xl font-bold"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                  >
                    60%
                  </text>
                </svg>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                berkemungkinan terkena penyakit{' '}
                <span className="font-bold text-red-600">Sifilis</span>. Segera cari
                penanganan di fasilitas kesehatan terdekat
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleBackToStart}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-200"
                >
                  Kembali
                </button>
                <button
                  onClick={() => window.location.href = '/appointment'} // Placeholder for actual recommendation view
                  className="bg-[#1F4287] hover:bg-[#1F4287]/90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Lihat Rekomendasi
                </button>
              </div>
            </div>
          )}

          {screenState === 'history' && (
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">History</h1>
              <div className="space-y-4">
                {history.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No screening history yet.</p>
                ) : (
                  history.map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
                    >
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          {entry.name}
                        </h2>
                        <p className="text-gray-600 mt-1">
                          Result: {entry.resultPercentage}% risk of{' '}
                          <span className="font-semibold text-red-600">
                            {entry.resultDisease}
                          </span>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{entry.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => alert(`Details for ${entry.name}`)}
                          className="px-4 py-2 bg-[#1F4287] hover:bg-[#1F4287]/90 text-white rounded-md font-medium text-sm transition duration-200"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => handleDeleteHistory(entry.id)}
                          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium text-sm transition duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}