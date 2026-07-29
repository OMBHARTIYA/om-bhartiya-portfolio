import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import PDFDocument from 'pdfkit';

import {
  cvCredentials,
  cvProjects,
  cvSkillGroups,
  education,
  experience,
  languages,
  profile
} from '../src/profileData.mjs';


const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, '..');
const canonicalPath = resolve(projectRoot, 'public', 'assets', 'om-bhartiya-data-analyst-cv.pdf');

const colors = {
  blue: '#3f7fdf',
  ink: '#111111',
  line: '#8f8f8f'
};

const clean = (value) => String(value)
  .normalize('NFD')
  .replace(/\p{M}/gu, '')
  .replace(/[–—]/g, '-')
  .replace(/[‘’]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/·/g, '|')
  .replace(/\u00a0/g, ' ');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 52, bottom: 48, left: 54, right: 54 },
  bufferPages: true,
  info: {
    Title: `${profile.name} - Data Analyst CV`,
    Author: profile.name,
    Subject: profile.headline,
    Keywords: 'Data Analyst, Power BI, SQL, Microsoft Fabric, DAX, Power Query'
  }
});

const chunks = [];
doc.on('data', (chunk) => chunks.push(chunk));
const completed = new Promise((resolvePromise, rejectPromise) => {
  doc.on('end', resolvePromise);
  doc.on('error', rejectPromise);
});

const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
const pageBottom = () => doc.page.height - doc.page.margins.bottom;

const ensureSpace = (height) => {
  if (doc.y + height > pageBottom()) doc.addPage();
};

const sectionHeading = (title, options = {}) => {
  if (options.rule) {
    doc
      .moveTo(doc.page.margins.left, doc.y)
      .lineTo(doc.page.width - doc.page.margins.right, doc.y)
      .lineWidth(0.65)
      .strokeColor(colors.line)
      .stroke();
    doc.y += 13;
  } else {
    doc.moveDown(0.68);
  }

  ensureSpace(28);
  doc
    .font('Helvetica-Bold')
    .fontSize(12.2)
    .fillColor(colors.blue)
    .text(clean(title));
  doc.y += 5;
};

const bullet = (text, options = {}) => {
  const fontSize = options.fontSize ?? 9.55;
  const left = doc.page.margins.left + 16;
  const width = contentWidth - 16;
  const cleaned = clean(text);
  const commaIndex = options.boldLead === false ? -1 : cleaned.indexOf(',');
  const lead = commaIndex > 0 ? cleaned.slice(0, commaIndex) : '';
  const rest = commaIndex > 0 ? cleaned.slice(commaIndex) : cleaned;
  const height = doc.heightOfString(cleaned, {
    width: width - 12,
    font: 'Helvetica',
    fontSize,
    lineGap: 1.2
  });

  ensureSpace(height + 7);
  const y = doc.y;
  doc.circle(left + 2.5, y + 5, 1.75).fillColor(colors.ink).fill();
  doc
    .font(lead ? 'Helvetica-Bold' : 'Helvetica')
    .fontSize(fontSize)
    .fillColor(colors.ink)
    .text(lead || rest, left + 10, y, {
      width: width - 10,
      lineGap: 1.2,
      continued: Boolean(lead)
    });
  if (lead) {
    doc
      .font('Helvetica')
      .text(rest, {
        width: width - 10,
        lineGap: 1.2
      });
  }
  doc.y += 3;
};

const labelledLine = (label, value) => {
  ensureSpace(28);
  doc
    .font('Helvetica-Bold')
    .fontSize(10.1)
    .fillColor(colors.blue)
    .text(clean(label));
  doc
    .font('Helvetica')
    .fontSize(9.7)
    .fillColor(colors.ink)
    .text(clean(value), { lineGap: 1.2 });
  doc.y += 4;
};

doc
  .font('Helvetica-Bold')
  .fontSize(17.2)
  .fillColor(colors.blue)
  .text(clean(profile.name));

doc
  .font('Helvetica')
  .fontSize(10.2)
  .fillColor(colors.ink)
  .text(clean(`${profile.location} | ${profile.phoneDisplay}`));

doc
  .fillColor('#0057c8')
  .text(clean(profile.email), { link: `mailto:${profile.email}`, underline: true, continued: true })
  .fillColor(colors.ink)
  .text(' | ', { continued: true })
  .fillColor('#0057c8')
  .text('LinkedIn', { link: profile.linkedin, underline: true, continued: true })
  .fillColor(colors.ink)
  .text(' | ', { continued: true })
  .fillColor('#0057c8')
  .text('GitHub', { link: profile.github, underline: true, continued: true })
  .fillColor(colors.ink)
  .text(' | ', { continued: true })
  .fillColor('#0057c8')
  .text('Portfolio', { link: profile.portfolio, underline: true });

sectionHeading('Professional Summary');
doc
  .font('Helvetica')
  .fontSize(9.8)
  .fillColor(colors.ink)
  .text(clean(profile.summary), {
    width: contentWidth,
    lineGap: 1.7,
    align: 'left'
  });

sectionHeading('Work Experience');
for (const item of experience) {
  ensureSpace(58);
  doc
    .font('Helvetica-BoldOblique')
    .fontSize(10.3)
    .fillColor(colors.blue)
    .text(clean(`${item.role} | ${item.company}`));
  doc
    .font('Helvetica-Oblique')
    .fontSize(9.4)
    .fillColor(colors.ink)
    .text(clean(item.period));
  doc.y += 2;
  for (const itemBullet of item.bullets) bullet(itemBullet);
  doc.y += 5;
}

doc.addPage();
sectionHeading('Skills', { rule: true });
for (const group of cvSkillGroups) labelledLine(group.title, group.skills);

sectionHeading('Selected Projects');
for (const project of cvProjects) {
  bullet(`${project.title}: ${project.text}`, { fontSize: 9.7, boldLead: false });
}

sectionHeading('Education');
for (const item of education) {
  bullet(`${item.detail} | ${item.school} (${item.period})`, {
    fontSize: 9.7,
    boldLead: false
  });
}

sectionHeading('Certifications & Professional Learning');
for (const item of cvCredentials) bullet(item, { fontSize: 9.45, boldLead: false });

sectionHeading('Languages');
bullet(languages.join(' | '), { fontSize: 9.7, boldLead: false });

doc.end();
await completed;

const pdfBuffer = Buffer.concat(chunks);
await mkdir(dirname(canonicalPath), { recursive: true });
await writeFile(canonicalPath, pdfBuffer);

console.log(`Generated ${canonicalPath}`);
