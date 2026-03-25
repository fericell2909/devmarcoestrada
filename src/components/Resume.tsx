import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { SKILLS, CERTIFICATIONS } from '../data';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../hooks/useLanguage';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="skill">
      <div className="skill__header">
        <span className="skill__name">{name}</span>
        <span className="skill__level">{level}%</span>
      </div>
      <div className="skill__track">
        <div
          className="skill__bar"
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Resume() {
  const { ref, inView } = useInView();
  const { t, experiences, education } = useLanguage();
  const frontend = SKILLS.filter((s) => s.category === 'frontend');
  const backend = SKILLS.filter((s) => s.category === 'backend');
  const data = SKILLS.filter((s) => s.category === 'database');
  const tools = SKILLS.filter((s) => s.category === 'tools');

  return (
    <section
      id="resume"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section resume ${inView ? 'section--visible' : ''}`}
      aria-labelledby="resume-heading"
    >
      <div className="container">
        <div className="section__header">
          <span className="section__tag">{t.resume.tag}</span>
          <h2 id="resume-heading" className="section__title">
            {t.resume.title} <span className="accent">{t.resume.titleAccent}</span>
          </h2>
        </div>

        <div className="resume__grid">
          {/* Left — Timeline */}
          <div className="resume__timeline-col">
            <div className="resume__block">
              <h3 className="resume__block-title">
                <Briefcase size={18} className="accent" />
                {t.resume.experience}
              </h3>
              <ul className="timeline">
                {experiences.map((exp, i) => (
                  <li key={i} className="timeline__item">
                    <div className="timeline__dot" />
                    <div className="timeline__content">
                      <span className="timeline__period">{exp.period}</span>
                      <h4 className="timeline__role">{exp.role}</h4>
                      <p className="timeline__company">{exp.company}</p>
                      <p className="timeline__description">{exp.description}</p>
                      {exp.tech && (
                        <div className="timeline__tags">
                          {exp.tech.map((t) => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="resume__block">
              <h3 className="resume__block-title">
                <GraduationCap size={18} className="accent" />
                {t.resume.education}
              </h3>
              <ul className="timeline">
                {education.map((edu, i) => (
                  <li key={i} className="timeline__item">
                    <div className="timeline__dot" />
                    <div className="timeline__content">
                      <span className="timeline__period">{edu.period}</span>
                      <h4 className="timeline__role">{edu.degree}</h4>
                      <p className="timeline__company">{edu.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="resume__block">
              <h3 className="resume__block-title">
                <Award size={18} className="accent" />
                {t.resume.certifications}
              </h3>
              <ul className="certs">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} className="cert">
                    <span className="cert__name">{cert.name}</span>
                    <span className="cert__issuer">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Skills */}
          <div className="resume__skills-col">
            <h3 className="resume__block-title">{t.resume.technicalSkills}</h3>

            <div className="skills-group">
              <p className="skills-group__label">{t.resume.frontend}</p>
              {frontend.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
              ))}
            </div>

            <div className="skills-group">
              <p className="skills-group__label">{t.resume.backend}</p>
              {backend.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
              ))}
            </div>

            <div className="skills-group">
              <p className="skills-group__label">{t.resume.databases}</p>
              {data.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
              ))}
            </div>

            <div className="skills-group">
              <p className="skills-group__label">{t.resume.cloudTools}</p>
              {tools.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
