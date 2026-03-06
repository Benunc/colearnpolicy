# Colearn Academy — Systems & Security
## All Policies and Standards (Single Document)

*Generated from the policy HTML files. Pending Governing Board Approval.*

---
(Drafted March 2026. Pending Governing Board Approval)


# Information Security & Cybersecurity Program Policy


## 1. Purpose

Colearn Academy establishes this Information Security & Cybersecurity Program Policy to protect student, staff, and institutional information and to support the reliable operation of instructional and administrative systems. This policy defines the overall approach, roles, and expectations for managing cybersecurity risk at Colearn Academy.


## 2. Scope

This policy applies to all employees, contractors, vendors, volunteers, and any other individuals or entities that access Colearn Academy information systems or handle Colearn Academy data, regardless of physical location or state of operation.

**Operating context:** Colearn Academy is a virtual school with no physical building and no school-owned hardware. Devices used for school purposes are owned by families or students.


## 3. Governance and Roles


### 3.1 Information Security Lead

Colearn Academy designates the Director of Technology and Systems as the Information Security Lead. The Information Security Lead is responsible for coordinating cybersecurity activities, overseeing implementation of this and related policies, and serving as a primary point of contact with authorizers and applicable agencies on cybersecurity matters.


### 3.2 Reporting

The Information Security Lead will provide at least one annual update to school leadership and the governing board summarizing: (a) results of cybersecurity assessments, (b) key risks and gaps relative to baseline controls, and (c) progress on the cybersecurity roadmap and planned next steps.


### 3.3 Frameworks and Standards

Colearn Academy uses widely recognized cybersecurity frameworks appropriate for K–12 environments, including the CIS Critical Security Controls (with emphasis on Implementation Group 1) and the NIST Cybersecurity Framework core functions (Identify, Protect, Detect, Respond, Recover), as references for organizing and prioritizing safeguards. Specific technologies and vendors are selected based on risk, feasibility, and available resources.


### 3.4 Governance Alignment

Colearn Academy will coordinate with its authorizers and applicable state requirements in each jurisdiction. In South Carolina, the School is currently authorized by the Limestone Charter Association and will join the Charter Institute at Erskine (Erskine Charter) in the next school year. In Arizona, Colearn Academy operates as its own district. Public information on the South Carolina authorizers can be found at:

- Limestone Charter Association (current): [https://limestonecharter.org](https://limestonecharter.org)
- Charter Institute at Erskine (joining next school year): [https://erskinecharters.org](https://erskinecharters.org)


## 4. Cybersecurity Roadmap

Colearn Academy will maintain a written cybersecurity roadmap that identifies prioritized initiatives for improving security over a multi‑year period. The roadmap will be based on assessment results and will be reviewed at least annually and updated as needed.


## 5. Policy Relationships

This overarching policy is supported by topic‑specific policies and standards, including but not limited to: Asset & Configuration Management, Identity & Access Management, Data Protection & Privacy, Vulnerability & Patch Management, Logging & Monitoring, Email/Web/Endpoint Protection, Backup & Recovery, Service Provider Management, Security Awareness & Training, and Incident Response.


## 6. Review

This policy will be reviewed at least annually by the Information Security Lead and updated as necessary to reflect changes in risk, technology, or regulatory requirements.

---

(Drafted March 2026. Pending Governing Board Approval)


# Asset & Configuration Management Standard

Inventory of cloud systems and credentials used to access them; baseline configuration of those systems. No tracking of individual devices or hardware. Touches: Control 1 (hardware assets), Control 2 (software assets), Control 4 (secure configuration).


## 1. Purpose

This standard establishes minimum expectations for identifying and managing Colearn Academy’s cloud-based systems and the credentials used to access them, and for applying baseline configurations that support secure and reliable operations. The School does not track individual devices or hardware.


## 2. Scope

This standard applies to key cloud‑hosted systems and applications used for instructional or administrative purposes and to the cloud credentials (accounts and access) used to access those systems. It does not apply to inventorying or tracking individual devices or hardware; the School tracks only cloud systems and credentials.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware. Devices used for school purposes are owned by families or students. The School does not maintain a list of computers or other devices; it tracks only the cloud credentials used to access systems and user engagement with cloud services.


## 3. Asset Inventory


### 3.1

Colearn Academy will not maintain a list of computers or other devices used for school purposes. The School will maintain a list of actual hardware owned and controlled by the School (if any). The School tracks only cloud credentials used to access systems and user engagement with cloud services; there is no tracking of individual devices or hardware.


### 3.2

Colearn Academy will maintain an inventory or register of key cloud systems and services (for example, student information system, learning management system, communication and collaboration platforms, assessment platforms, and file storage services) and of the credentials and access methods used to reach them.


## 4. Authorized Systems and Access


### 4.1

Colearn Academy will identify authorized cloud systems and the credentials used to access them. The School does not define or track “authorized devices” or hardware; only cloud systems and account/credential access are in scope.


### 4.2

Where feasible, the School will take reasonable steps to limit the use of unauthorized credentials or access on school cloud systems and accounts (for example, through access controls, identity management, and acceptable-use expectations). No control or tracking of individual devices or hardware is required.


## 5. Baseline Configuration


### 5.1

The Information Security Lead, or a delegated technical role, will define baseline configuration expectations for key cloud systems and for the security of credentials used to access them (for example, authentication and access settings, role-based access, and security options offered by the platform). This standard does not require configuration or tracking of individual devices or hardware.


### 5.2

New cloud systems or accounts should be configured to align with baseline expectations before being placed into production use, when feasible.


## 6. Configuration Changes


### 6.1

Material configuration changes to critical cloud systems (for example, SIS, LMS, identity platform, or other key applications) should be documented in a simple change record (such as a ticket, log entry, or change register) that identifies the date, purpose, and responsible person.


## 7. Review

This standard will be reviewed at least annually and updated as needed to reflect changes in technology, risk, or best practices.

---

(Drafted March 2026. Pending Governing Board Approval)


# Identity, Account, and Access Management Policy

Account lifecycle, roles, least‑privilege, MFA for admins, periodic access reviews. Touches: Control 5 (Account Management) and Control 6 (Access Control Management).


## 1. Purpose

This policy defines how Colearn Academy manages user identities, accounts, and access rights to help ensure that only authorized individuals have appropriate access to school systems and data.


## 2. Scope

This policy applies to all user accounts (including staff, contractors, volunteers, and students where applicable) that access Colearn Academy systems and data.


## 3. Account Provisioning and Deprovisioning


### 3.1

New accounts will be created only upon documented authorization (for example, HR onboarding, enrollment, or written request from a manager).


### 3.2

When a user’s role changes or their relationship with the School ends, their access will be updated or disabled in a timely manner based on available processes and tools.


## 4. Access Rights and Least Privilege


### 4.1

Access to systems and data will be based on role and job responsibilities, following the principle of least privilege.


### 4.2

Administrative or high‑privilege accounts will be limited to staff who require such access to perform their duties.


### 4.3

Colearn Academy will phase in separate non‑privileged and administrative accounts for staff with elevated access. Initial focus will be on highest‑impact systems (e.g., identity provider, SIS, LMS). Target: design in FY 2025–26; staged rollout in FY 2026–27.


## 5. Authentication Practices


### 5.1

User accounts must be protected by passwords or other authentication mechanisms that comply with minimum complexity or length requirements defined by the School and/or underlying platforms. Role-based differences for default passwords and multi‑factor authentication are set forth in section 6.


### 5.2

Where feasible, multi‑factor authentication (MFA) will be used for administrative or high‑risk accounts and may be expanded to other accounts over time based on risk. Staff are required to use MFA as specified in section 6.


## 6. Default Passwords and Requirements by Role


### 6.1 Staff

Staff accounts may access sensitive or confidential data beyond the staff member’s own information. Default or initial passwords for staff must meet strong password requirements defined by the School or the underlying platform. Staff are required to use multi‑factor authentication (2FA). Strong passwords and 2FA apply even to initial or default credentials; staff must complete any required password change or 2FA enrollment before using systems that handle sensitive data.


### 6.2 Students

Student accounts do not have access to sensitive data other than the student’s own information. Students may be assigned memorable default passwords that do not meet strict complexity requirements, to support usability and age-appropriate access. Students are encouraged to change their password when able. Staff are held to a higher standard than students because of the sensitivity of data staff may access.


## 7. Application and Vendor Support

Colearn Academy will track whether the applications and services used for school purposes receive regular vendor support and security updates. This requirement applies to web-based and cloud applications that the School uses to deliver instruction or conduct operations. It is not based on software installed on school-owned devices; the School has no school-owned hardware, and the applications in scope are primarily web applications accessed via the internet. The Information Security Lead or designee will maintain awareness of vendor support status for applications in the School’s inventory and will document or tag applications that are no longer receiving regular support so that they may be addressed in accordance with the School’s risk management and procurement practices.


## 8. Periodic Review


### 8.1

At least annually, the Information Security Lead or designee will coordinate a review of access to selected critical systems to confirm that access remains appropriate.


## 9. Review

This policy will be reviewed at least annually and updated as needed to reflect changes in systems, roles, or risk.

---

(Drafted March 2026. Pending Governing Board Approval)


# Data Protection & Privacy Policy

Data classification (at a simple level), storage/handling rules, encryption “where feasible,” retention and disposal. Touches: Control 3 (Data Protection), intersects with Control 11 (Data Recovery) and Control 15 (Service Provider Management).


## 1. Purpose

This policy sets expectations for protecting Colearn Academy data throughout its lifecycle, with particular attention to student and staff information and other sensitive data.


## 2. Scope

This policy applies to all Colearn Academy data in any format (electronic or physical) and to all individuals who create, access, store, transmit, or dispose of such data in the course of their work with the School.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware. Data is stored and accessed via cloud systems and on family- or user-owned devices.


## 3. Data Categories


### 3.1

Colearn Academy will define simple categories of data (for example, public, internal, confidential/sensitive) and provide examples of each to guide staff behavior.


### 3.2

Student records, staff personnel information, and other legally protected information will be treated as confidential or sensitive.


## 4. Handling and Storage


### 4.1

Staff will use school‑approved systems and accounts for storing and transmitting confidential or sensitive data where reasonably practical.


### 4.2

Confidential or sensitive data should not be stored on unmanaged personal devices unless specifically authorized and protected by appropriate safeguards.


## 5. Transmission and Sharing


### 5.1

Confidential or sensitive data should be transmitted using secure methods where feasible (for example, secure portals, encrypted channels, or password‑protected files, as supported by the School’s tools).


### 5.2

Data sharing with external parties must be consistent with applicable laws, contracts, and agreements.


## 6. Retention and Disposal


### 6.1

Data will be retained only as long as needed to meet educational, operational, legal, and regulatory requirements.


### 6.2

When data is no longer needed and is eligible for disposal, it should be destroyed or deleted in a manner that reduces the likelihood of unauthorized access (for example, secure deletion in systems under school control or following vendor‑provided guidance).


## 7. Privacy Considerations


### 7.1

The School will take reasonable steps to comply with applicable student and staff privacy requirements and will publish appropriate notices or statements describing how key categories of information are used and protected.


## 8. Review

This policy will be reviewed at least annually and updated as needed to reflect changes in law, regulation, technology, or school practices.

---

(Drafted March 2026. Pending Governing Board Approval)


# Vulnerability & Patch Management Standard

How you keep OS/applications updated, how you respond to “high” or “critical” vulnerabilities, basic cadence. Touches: Control 7 (Continuous Vulnerability Management) and parts of Control 4.


## 1. Purpose

This standard defines how Colearn Academy will address known security vulnerabilities and keep systems reasonably up to date with security patches.


## 2. Scope

This standard applies to school‑managed devices, operating systems, and key applications and services under Colearn Academy’s administrative control.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware. “School‑managed” refers to cloud applications and services under the School’s control and, where applicable, to configuration or update expectations for software on family- or user-owned devices used for school purposes.


## 3. Patching and Updates


### 3.1

Where possible, automatic updates will be enabled on supported platforms for operating systems and commonly used applications.


### 3.2

For systems where automatic updates are not available or appropriate, updates should be applied on a regular schedule and as soon as practical for critical security fixes.


## 4. Vulnerability Information


### 4.1

The Information Security Lead or designee will stay reasonably informed about significant security advisories that may affect major platforms or services used by the School.


### 4.2

When critical or high‑impact vulnerabilities are identified that are relevant to the School, the School will assess risk and prioritize remediation efforts accordingly.


## 5. Exceptions


### 5.1

If a patch or change cannot be applied in a timely manner due to operational constraints, the School will consider temporary risk‑reducing measures (for example, limiting access, changing configuration, or monitoring more closely) where feasible.


## 6. Review

This standard will be reviewed at least annually and updated as needed to reflect changes in technology or risk.

---

(Drafted March 2026. Pending Governing Board Approval)


# Logging & Monitoring Standard

What logs you keep (e.g., cloud admin actions, sign‑ins, endpoint alerts) and minimal retention; who reviews them and when (even if lightweight). Touches: Control 8 (Audit Log Management), supports Control 17.


## 1. Purpose

This standard defines minimum expectations for generating and reviewing logs that may be useful for detecting and investigating cybersecurity‑related events at Colearn Academy.


## 2. Scope

This standard applies to critical systems and services where the School has access to logging and monitoring capabilities, including but not limited to identity platforms, key cloud services, and security tools.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware. Logging and monitoring apply to cloud and identity platforms and to any security tools the School uses; there is no on‑premises infrastructure.


## 3. Log Generation


### 3.1

Where practical, Colearn Academy will enable logging features provided by critical systems and security tools, especially for administrative actions, sign‑ins, and security‑related events.


## 4. Retention


### 4.1

Logs for critical systems should be retained for a reasonable period, subject to technical and cost constraints, to support basic investigation of incidents.


## 5. Review


### 5.1

The Information Security Lead or designee will review available security‑relevant alerts and logs on a periodic basis, focusing on higher‑risk systems and events.


### 5.2

Potentially suspicious activity identified through logs or alerts will be evaluated and, if necessary, escalated in accordance with the Incident Response Plan.


## 6. Review

This standard will be reviewed at least annually and updated as needed based on changes in systems, tooling, and risk.

---

(Drafted March 2026. Pending Governing Board Approval)


# Email, Web, and Endpoint Protection Standard

Spam/malware filtering expectations, attachment/URL defenses, basic web protections (e.g., student content filters if applicable), antivirus/EDR expectations. Touches: Control 9 (Email and Web Browser Protections), Control 10 (Malware Defenses).


## 1. Purpose

This standard sets expectations for protecting Colearn Academy users and devices from common threats delivered via email, web browsing, and malicious software.


## 2. Scope

This standard applies to school‑managed email services, web access used for school purposes, and school‑managed endpoint devices.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware. Endpoint “devices” are owned by families or students; “school‑managed” means school email and web accounts and any security configuration or software the School requires or recommends on those devices.


## 3. Email Protections


### 3.1

Colearn Academy will use available email security features (for example, spam and malware filtering) provided by its email platform or related tools to reduce unwanted and malicious messages.


### 3.2

Users should exercise caution when opening attachments or clicking links from unknown or unexpected senders and are encouraged to report suspicious messages.


## 4. Web Protections


### 4.1

Where feasible, Colearn Academy will use available controls or services to reduce access to known malicious or inappropriate websites, especially for student accounts.


### 4.2

Users are expected to follow acceptable use guidelines and to avoid risky web behavior that could expose school systems or data to harm.


## 5. Supported Browsers and Email Clients


### 5.1

Colearn Academy requires that users access school systems using vendor‑supported, up‑to‑date web browsers and email clients. The School relies on native update mechanisms (such as automatic updates enabled by default in modern browsers and email applications) to help ensure that users remain on supported versions.


### 5.2

Where the School manages browsers directly (for example, managed Chrome profiles or school‑issued devices), automatic updates will be enabled where feasible, and users are expected not to disable or circumvent these update mechanisms. For key instructional platforms such as the learning management system, the School follows the platform’s published supported‑browser requirements (for example, “current and previous major versions” of mainstream browsers) and communicates these expectations to staff and students.


### 5.3

Users are expected to avoid using outdated or unsupported browsers and email clients for accessing school systems. If a user encounters compatibility warnings indicating that their browser or email client is unsupported, they are expected to update or switch to a supported option before continuing to use school systems.


## 6. Endpoint Protection


### 6.1

Devices used for school purposes (family- or user-owned) should have antivirus or equivalent endpoint protection software installed and enabled, where supported; the School may require or recommend specific protections as a condition of access.


### 6.2

Device users should not disable or circumvent security protections required or recommended by the School on devices used for school purposes.


## 7. Review

This standard will be reviewed at least annually and updated as needed to reflect changes in threats, technology, or tools available to the School.

---

(Drafted March 2026. Pending Governing Board Approval)


# Backup & Recovery Standard

What gets backed up, how often, where, how long you keep it, and a requirement to periodically test restoration. Touches: Control 11 (Data Recovery) and supports Control 3 (Data Protection).


## 1. Purpose

This standard defines expectations for backing up and restoring critical Colearn Academy systems and data to support continuity of operations in the event of data loss or system disruption.


## 2. Scope

This standard applies to identified critical systems and data stores that are under Colearn Academy’s control or for which the School coordinates backup arrangements with service providers.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware. Critical systems and data are cloud-based; backup and recovery arrangements are with cloud and software providers.


## 3. Identification of Critical Systems and Data


### 3.1

Colearn Academy will identify systems and data that are critical to instructional and administrative operations (for example, student information, learning systems, and key financial and operational records). The School maintains backups of essential cloud data and of learning management system (LMS) data, consistent with the critical systems and data identified under this standard.


### 3.2

Essential cloud data and LMS system data are in scope for backup and recovery. Backup arrangements may be provided by the School’s cloud and LMS vendors or by separate backup services; the Information Security Lead or designee will ensure that backup coverage for these systems is in place and documented.


## 4. Backup Practices


### 4.1

Critical systems and data will be backed up on a regular schedule appropriate to their importance and rate of change, using methods supported by the School’s tools and vendors.


### 4.2

Backups must be protected via physical security or encryption when stored and when moved across the network. This includes remote backups and backups held by cloud services. Colearn Academy does not operate its own backup infrastructure; the School’s backups are held by cloud providers, LMS vendors, or third‑party backup services. The onus for implementing encryption (at rest and in transit) and physical security of backup storage and facilities lies with those providers. The School will ensure that backup and cloud service providers used for critical systems and data implement appropriate protection—including encryption of backup data in transit and at rest and physical security of backup storage—through vendor selection, contract or agreement language, and verification of provider practices where feasible.


### 4.3

Colearn Academy primarily uses cloud‑hosted (SaaS) platforms. For those systems, the School relies on the providers’ built‑in backup and data‑recovery capabilities and documents key retention and restore options made available by the provider.


### 4.4

For critical data sets (for example, core SIS and LMS records), the School will maintain at least one additional recovery copy by performing periodic exports to a logically separate storage location with restricted access. This separate copy is not used for day‑to‑day operations and is intended to serve as an isolated recovery source in the event that primary data or provider‑managed backups are unavailable or compromised.


## 5. Restoration and Testing


### 5.1

The School will periodically test the ability to restore data from backups for at least select systems or data sets, as resources allow.


### 5.2

Procedures or notes for restoring critical systems or data should be documented and accessible to appropriate personnel during an incident.


## 6. Review

This standard will be reviewed at least annually and updated as needed to reflect changes in systems, priorities, or available backup options.

---

(Drafted March 2026. Pending Governing Board Approval)


# Service Provider / Vendor Security Policy

Minimal security language you expect in contracts, due‑diligence questions, how you track critical vendors. Touches: Control 15 (Service Provider Management).


## 1. Purpose

This policy establishes expectations for managing security and privacy risks associated with third‑party service providers and vendors that process, store, or access Colearn Academy data.


## 2. Scope

This policy applies to significant service providers and vendors that support instructional or administrative functions and handle Colearn Academy data or have access to school systems.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware; the School operates entirely through cloud and vendor‑provided services.


## 3. Vendor Inventory


### 3.1

Colearn Academy will maintain a list or register of key service providers and vendors, including the general purpose of each service and the types of data involved.


## 4. Security and Privacy Considerations


### 4.1

When selecting or renewing service providers, the School will consider the provider’s security and privacy practices, including how they protect data and handle incidents.


### 4.2

Where feasible, contracts or agreements should include language addressing data protection, permitted uses of data, access controls, and incident notification expectations.


## 5. Ongoing Oversight


### 5.1

The School will periodically review its list of key vendors to confirm that services and associated risks remain acceptable.


## 6. Review

This policy will be reviewed at least annually and updated as needed to reflect changes in vendor relationships, legal requirements, or risk.

---

(Drafted March 2026. Pending Governing Board Approval)


# Security Awareness & Training Policy

Who must take training, how often, and core topics (phishing, passwords, device care, student data handling). Touches: Control 14 (Security Awareness and Skills Training).


## 1. Purpose

This policy defines expectations for cybersecurity awareness and training at Colearn Academy to help staff and students understand their role in protecting school systems and data.


## 2. Scope

This policy applies to employees and, where appropriate, to contractors and volunteers. Student‑facing elements apply to enrolled students as determined by school leadership.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware; staff and students use their own or family-owned devices for school purposes.


## 3. Staff Training


### 3.1

Colearn Academy will provide periodic cybersecurity awareness training for staff. Training topics may include recognizing phishing and social engineering, using strong authentication practices, protecting devices, and appropriately handling student and staff information.


### 3.2

Completion of required training may be tracked to support accountability.


## 4. Student Awareness


### 4.1

The School will provide age‑appropriate guidance to students on safe and responsible use of technology, aligned with applicable digital citizenship and internet safety expectations.


## 5. Communication and Reminders


### 5.1

The School may provide reminders, tips, or other communications throughout the year to reinforce key security practices.


## 6. Review

This policy will be reviewed at least annually and updated as needed to reflect emerging threats, best practices, or changes in curriculum and tools.

---

(Drafted March 2026. Pending Governing Board Approval)


# Incident Response Plan

Roles, phases (detect, triage, contain, eradicate, recover), communications, when to notify law enforcement, parents, regulators/authorizers. Touches: Control 17 (Incident Response Management) and uses info from Controls 8, 11, 14.


## 1. Purpose

This plan outlines a high‑level approach for how Colearn Academy will prepare for, detect, respond to, and recover from cybersecurity incidents that could affect school systems, data, or operations.


## 2. Scope

This plan applies to incidents involving Colearn Academy information systems, data, or accounts, including incidents that occur in cloud‑hosted environments or involve third‑party services.

**Operating context:** Colearn Academy has no physical building and no school-owned hardware. Incidents typically involve cloud services, accounts, or family-/user-owned devices used for school access.


## 3. Roles and Responsibilities


### 3.1

The Information Security Lead coordinates incident response activities and may convene an incident response team that includes representatives from leadership, technology, operations, and other areas as needed.


### 3.2

Roles and responsibilities may include: triage and technical analysis, communications, coordination with vendors, coordination with authorizers or other agencies, and documentation.


## 4. Incident Lifecycle


### 4.1 Identification

Potential incidents may be identified through user reports, alerts from security tools, vendor notifications, or other sources. Suspected incidents should be reported promptly to the Information Security Lead or designated contact.


### 4.2 Triage and Containment

Upon notification, the School will assess the nature and scope of the suspected incident and determine initial containment steps (for example, disabling accounts, isolating affected devices, or limiting access), as appropriate.


### 4.3 Eradication and Recovery

As feasible, the School will work to remove malicious components, correct misconfigurations, or otherwise address the root cause, and then restore affected systems and data from clean backups or reliable sources.


### 4.4 Communication

The School will determine what internal and external communications are needed, which may include notifying leadership, affected users, vendors, authorizers, or government entities, consistent with applicable laws and contractual obligations.


### 4.5 Lessons Learned

After significant incidents, the School will review what occurred, what worked well, and what can be improved. Findings may inform updates to policies, configurations, training, or this plan.


## 5. Documentation


### 5.1

The School will maintain basic records of significant incidents, including dates, systems or data involved, actions taken, and key decisions.


## 6. Review

This plan will be reviewed at least annually and after significant incidents to ensure it remains relevant and effective.