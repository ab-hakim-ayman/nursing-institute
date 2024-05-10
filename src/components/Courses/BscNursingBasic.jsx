import React from "react";
import Image from "next/image";

const BscNursingBasic = () => {
  return (
    <>
      <div className="container">
        <div className="w-full my-5">
          <div>
            <h2 className="font-semibold text-2xl text-opacity-100 text-neutral-800">
              Curriculum Title
            </h2>
            <h3 className="font-semibold text-xl text-opacity-50 text-zinc-950 mb-5">
              Bachelor of Science in Nursing (basic)
            </h3>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-opacity-100 text-neutral-800">
              Degree Awarded
            </h2>
            <h3 className="font-semibold text-xl text-opacity-50 text-zinc-950 mb-5">
              Bachelor of Science in Nursing (basic)
            </h3>
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-opacity-100 text-neutral-800">
              Curriculum Goal
            </h1>
            <p className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
              The institutional goal of this program is to produce competent
              nurses that will enable them for demonstrate the competency of
              using knowledge-based practice for provision of quality holistic
              client centered nursing care to meet the needs/expectations and to
              promote, maintain, and restore heath of individuals, families, and
              communities nationally and internationally.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-opacity-100 text-neutral-800">
              Curriculum Design
            </h1>
            <p className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
              The course is dynamic with provision for incorporating emerging
              health problems and changing health policies as well as latest
              advancement in health sciences. The Diploma in Nursing Science
              curriculum is designed for BNMC recognized institutions and
              incorporate (1) General courses to prepare students to understand
              the world, understand human behaviors and well-behave in the
              society (2) Foundation courses to furnish students with essential
              knowledge relevant to nursing and midwifery and (3) Professional
              courses for nursing and midwifery specific courses. The courses
              are sequenced from year one to year three, from simple to complex,
              with an attempt to increase student’s competencies overtime.
            </p>
          </div>
          <div className="grid max-sm:grid-cols-1 md:grid-cols-2 gap-10 mt-7">
            <div className="w-full">
              <h1 className="font-semibold text-center text-2xl text-opacity-100 text-neutral-800">
                Method of Student Selection
              </h1>
              <div className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
                <p className="">
                  The Applicants who meet the following criteria will be
                  eligible to enter into the B.Sc. in Nursing:
                </p>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Entry qualification: The applicants must have passed both SSC
                  & HSC examinations from any discipline from any educational
                  Board of Intermediate and Secondary Education in Bangladesh.
                  Students will be selected on merit basis.
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Marks conversion from General Certificate of Education (GCE) -
                  "O‟ level and "A‟ level will be decided by the central
                  admission committee.
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Medical (physical & mental) fitness will be essential before
                  admission.
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  For foreign candidate: According to admission policy
                </h3>
                <h3 className="pb-2">
                  <span className="text-orange-700 pr-2">&#9673;</span>
                  Admission test will be conducted as per Act. of BNMC-2016
                  according to admission Policy/ Nitimala.
                </h3>
              </div>
            </div>
            <div className="w-full">
              <div>
                <h1 className="font-semibold text-center text-2xl text-opacity-100 text-neutral-800">
                  Duration of The Programme
                </h1>
                <p className="font-normal text-base text-opacity-50 text-zinc-950 mb-5">
                  There should be a minimum period of three years of education
                  programme. Total hours are 5112 in the three years course. The
                  academic year will start from January in each year. After
                  completion of the program every student has to perform 06(six)
                  months internship in an appropriate clinical areas/hospitals
                  according to logbook. On the successful completion of the
                  course, the student is required to take the BNMC comprehensive
                  examination for licensing as a registered nurse. BNMC will
                  issue professional License and academic certificate.
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

export default BscNursingBasic;
