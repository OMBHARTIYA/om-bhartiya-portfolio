import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import PDFDocument from 'pdfkit';

import {
  additionalWork,
  capabilityGroups,
  caseStudies,
  education,
  experience,
  languages,
  learning,
  profile
} from '../src/profileData.mjs';


const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, '..');
const canonicalPath = resolve(projectRoot, 'public', 'assets', 'om-bhartiya-cv.pdf');
const legacyPath = resolve(projectRoot, 'public', 'assets', 'Om Bhartiya Resume.pdf');

const colors = {
  ink: '#12221f',
  muted: '#53645f',
  teal: '#087d70',
  tealSoft: '#d9eee8',
  line: '#d7dfdc',
  paper: '#fffdf7'
};

const clean = (value) => String(value)
  .normalize('NFD')
  .replace(/\p{M}/gu, '')
  .replace(/[–—]/g, '-')
  .replace(/[‘’]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/·/g, '|')
  .replace(/→/g, 'to')
  .replace(/\u00a0/g, ' ');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 38, left: 42, right: 42 },
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
const bottomLimit = () => doc.page.height - doc.page.margins.bottom - 16;

const ensureSpace = (height) => {
  if (doc.y + height > bottomLimit()) doc.addPage();
};

const sectionHeading = (title) => {
  ensureSpace(32);
  doc.moveDown(0.55);
  doc
    .font('Helvetica-Bold')
    .fontSize(10.5)
    .fillColor(colors.teal)
    .text(clean(title).toUpperCase(), { characterSpacing: 0.7 });
  doc
    .moveTo(doc.page.margins.left, doc.y + 3)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 3)
    .lineWidth(0.6)
    .strokeColor(colors.line)
    .stroke();
  doc.y += 9;
};

const bullet = (text, options = {}) => {
  const fontSize = options.fontSize ?? 8.55;
  const left = doc.page.margins.left + (options.indent ?? 8);
  const width = contentWidth - (options.indent ?? 8);
  const cleaned = clean(text);
  const height = doc.heightOfString(cleaned, {
    width: width - 10,
    font: 'Helvetica',
    fontSize,
    lineGap: 1.2
  });
  ensureSpace(height + 6);
  const y = doc.y;
  doc.circle(left + 2, y + 4.2, 1.35).fillColor(colors.teal).fill();
  doc
    .font('Helvetica')
    .fontSize(fontSize)
    .fillColor(colors.ink)
    .text(cleaned, left + 9, y, {
      width: width - 9,
      lineGap: 1.2
    });
  doc.y += 3;
};

const smallLabel = (label, value) => {
  const startY = doc.y;
  doc.font('Helvetica-Bold').fontSize(8.7).fillColor(colors.ink).text(clean(label), {
    continued: true
  });
  doc.font('Helvetica').fillColor(colors.muted).text(` ${clean(value)}`);
  doc.y = Math.max(doc.y, startY + 12);
};

doc
  .rect(0, 0, doc.page.width, 98)
  .fillColor(colors.paper)
  .fill();

doc
  .font('Helvetica-Bold')
  .fontSize(24)
  .fillColor(colors.ink)
  .text(clean(profile.name), doc.page.margins.left, 34);

doc
  .font('Helvetica-Bold')
  .fontSize(11.5)
  .fillColor(colors.teal)
  .text(clean(profile.headline), doc.page.margins.left, 63);

doc
  .font('Helvetica')
  .fontSize(8.4)
  .fillColor(colors.muted)
  .text(
    clean(`${profile.location} | ${profile.phoneDisplay} | ${profile.email}`),
    doc.page.margins.left,
    81,
    { continued: true }
  )
  .fillColor(colors.teal)
  .text(' | LinkedIn', { link: profile.linkedin, continued: true })
  .text(' | GitHub', { link: profile.github, continued: true })
  .text(' | Portfolio', { link: profile.portfolio });

doc.y = 110;
sectionHeading('Professional summary');
doc
  .font('Helvetica')
  .fontSize(9.1)
  .fillColor(colors.ink)
  .text(clean(profile.summary), {
    width: contentWidth,
    lineGap: 1.8
  });

sectionHeading('Core capabilities');
for (const group of capabilityGroups) {
  smallLabel(`${group.title}:`, group.items.join(' | '));
}

sectionHeading('Professional experience');
for (const item of experience) {
  ensureSpace(48);
  const headingY = doc.y;
  doc
    .font('Helvetica-Bold')
    .fontSize(9.3)
    .fillColor(colors.ink)
    .text(clean(`${item.role} | ${item.company}`), doc.page.margins.left, headingY, {
      width: contentWidth - 115
    });
  doc
    .font('Helvetica-Oblique')
    .fontSize(8.2)
    .fillColor(colors.teal)
    .text(clean(item.period), doc.page.width - doc.page.margins.right - 115, headingY + 1, {
      width: 115,
      align: 'right'
    });
  doc.y = Math.max(doc.y, headingY + 15);
  for (const itemBullet of item.bullets) bullet(itemBullet);
  doc.y += 3;
}

doc.addPage();
doc
  .font('Helvetica-Bold')
  .fontSize(15)
  .fillColor(colors.ink)
  .text(clean(profile.name), doc.page.margins.left, 36, { continued: true })
  .font('Helvetica')
  .fontSize(9)
  .fillColor(colors.teal)
  .text(`  |  ${clean(profile.headline)}`);
doc.y = 64;

sectionHeading('Selected projects');
for (const project of caseStudies) {
  ensureSpace(72);
  doc
    .font('Helvetica-Bold')
    .fontSize(9.5)
    .fillColor(colors.ink)
    .text(clean(project.title), { continued: true })
    .font('Helvetica-Oblique')
    .fontSize(8)
    .fillColor(colors.teal)
    .text(`  |  ${clean(project.category)}`);
  bullet(project.summary, { fontSize: 8.45 });
  bullet(project.outcome, { fontSize: 8.45 });
  const repository = project.links.find((link) => link.href.startsWith('https://github.com/'));
  if (repository) {
    doc
      .font('Helvetica-Bold')
      .fontSize(7.7)
      .fillColor(colors.teal)
      .text('Evidence: public repository', {
        link: repository.href,
        underline: true
      });
    doc.y += 5;
  } else {
    doc.y += 3;
  }
}

sectionHeading('Supporting applications');
for (const project of additionalWork) {
  ensureSpace(38);
  doc
    .font('Helvetica-Bold')
    .fontSize(8.9)
    .fillColor(colors.ink)
    .text(clean(project.title), { continued: true })
    .font('Helvetica')
    .fillColor(colors.muted)
    .text(` - ${clean(project.text)}`, {
      width: contentWidth,
      lineGap: 1.1
    });
  doc.y += 3;
}

sectionHeading('Education');
for (const item of education) {
  smallLabel(`${item.detail} | ${item.school}`, item.period);
}

sectionHeading('Professional learning');
for (const item of learning) bullet(item, { fontSize: 8.2 });

sectionHeading('Languages & availability');
doc
  .font('Helvetica-Bold')
  .fontSize(8.8)
  .fillColor(colors.ink)
  .text(clean(languages.join(' | ')));
doc
  .font('Helvetica')
  .fontSize(8.3)
  .fillColor(colors.muted)
  .text(clean(profile.availability), { lineGap: 1.1 });

const pageRange = doc.bufferedPageRange();
for (let index = pageRange.start; index < pageRange.start + pageRange.count; index += 1) {
  doc.switchToPage(index);
  const footerY = doc.page.height - doc.page.margins.bottom - 10;
  doc
    .moveTo(doc.page.margins.left, footerY - 5)
    .lineTo(doc.page.width - doc.page.margins.right, footerY - 5)
    .lineWidth(0.5)
    .strokeColor(colors.line)
    .stroke();
  doc
    .font('Helvetica')
    .fontSize(7)
    .fillColor(colors.muted)
    .text(
      `Automatically generated from the portfolio profile data | Page ${index + 1} of ${pageRange.count}`,
      doc.page.margins.left,
      footerY,
      { width: contentWidth, align: 'center' }
    );
}

doc.end();
await completed;

const pdfBuffer = Buffer.concat(chunks);
await mkdir(dirname(canonicalPath), { recursive: true });
await Promise.all([
  writeFile(canonicalPath, pdfBuffer),
  writeFile(legacyPath, pdfBuffer)
]);

console.log(`Generated ${canonicalPath}`);
