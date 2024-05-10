import React from "react";
import Image from "next/image";

const MscNursing = () => {
  return (
    <>
      <div className="container">
        <div className="w-full my-5">
          <div>
            <h2 className="font-semibold text-2xl text-opacity-100 text-neutral-800">
              Curriculum Title
            </h2>
            <h3 className="font-semibold text-xl text-opacity-50 text-zinc-950 mb-5">
              Master of Science in Nursing
            </h3>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-opacity-100 text-neutral-800">
              Degree Awarded
            </h2>
            <h3 className="font-semibold text-xl text-opacity-50 text-zinc-950 mb-5">
              Master of Science in Nursing
            </h3>
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-opacity-100 text-neutral-800">
              Curriculum Goal
            </h1>
            <p className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
              The Master of Science in Nursing program aims to develop nurse
              leaders in the area of nursing practice, education, research, and
              management to promote health of all people in Bangladesh. Its
              vision is to make the school a “Center of Excellence” in
              post-graduate nursing education in the South-East Asian region.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-opacity-100 text-neutral-800">
              Curriculum Design
            </h1>
            <p className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
              The program structure is conceptualized into 4 major components:
              Nursing Core courses, Nursing Elective courses, Specialty Core
              courses, and Specialty Theory and Practicum courses. The numbers
              of courses and credits (48 credits total) that must be earned for
              each specialty track. We Offer Master Degree in 5 Major Areas
              (Community Health Nursing, Nursing management, Mental Health &
              Psychiatric Nursing, Child Health Nursing, Adult & Elderly Health
              Nursing)
            </p>
          </div>
          <div className="grid max-sm:grid-cols-1 md:grid-cols-2 gap-10 mt-7">
            <div className="w-full">
              <h1 className="font-semibold text-center text-2xl text-opacity-100 text-neutral-800">
                Method of Recruitment
              </h1>
              <div className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
                <p>
                  All applicants interested in applying for the MSN program must
                  submit the required admission documents shown below in Figure
                  5. All application documents must be submitted once a year for
                  review postmarked by the admissions deadline. All national and
                  international applicants must meet the following requirements
                  for admission.
                </p>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Completed admission application
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Official educational transcripts (average 55% grade
                  percentage) from all post-secondary schools attended
                  (International transcripts should be accompanied by a
                  course-by-course report from a credential evaluation agency
                  such as World Education Services)
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Official graduation certificate
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  icense or eligibility for licensure as a professional nurse in
                  Bangladesh
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Personal statement (500~700 words; including a plan of study,
                  area of research interest, reason for applying, and etc.)
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Resume, 3 Passport-size photos
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>A copy of
                  the Nationality Certificate/National ID (for National
                  Applicants only)
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>A copy of
                  the passport, Official IELTS score report (International
                  Applicants only)
                </h3>
              </div>
            </div>
            <div className="w-full">
              <div>
                <h1 className="font-semibold text-center text-2xl text-opacity-100 text-neutral-800">
                  Duration of The Programme
                </h1>
                <p className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
                  There should be a minimum period of two years of education
                  programme. Total credits are 48 in the two years course. The
                  academic year will start from January in each year.
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-center text-2xl text-opacity-100 text-neutral-800">
                  Medium of instruction
                </h1>
                <p className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
                  English language is used as a medium of instruction with
                  supplemental Bangla language as necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MscNursing;
