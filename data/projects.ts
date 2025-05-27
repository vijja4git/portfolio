const projects = [
    {
      title: 'Textile Printing Controller',
      description: 'Redesigned embedded firmware using PIC microcontrollers.',
      details: `Engineered a reliable controller to replicate and modernize legacy textile printing systems.
  - Integrated sensor-based timing logic and I/O mapping with optimized C-based routines.
  - Enabled compatibility with existing analog setups and conducted in-field tuning to ensure print accuracy.`,
    },
    {
      title: 'Proximity Sensor Control Unit',
      description: 'Upgraded industrial detection systems with custom no-contact logic.',
      details: `Replaced wired analog proximity sensors with programmable microcontroller logic.
  - Supported NO/NC configurations with configurable sensing distances.
  - Reduced false triggers through debounce logic and waveform filtering.`,
    },
    {
      title: 'VR Dragon Simulator',
      description: 'Unity3D-based VR rollercoaster using spline motion and Photon multiplayer.',
      details: `Developed a fully immersive 3D dragon flight experience.
  - Built spline-based tracks for smooth, physics-driven movement.
  - Integrated spatial audio and multiplayer sync via Photon Engine.`,
    },
    {
      title: 'Database Management System – University Rentals',
      description: 'Designed a relational SQL database for campus vehicle rentals.',
      details: `Modeled ER diagrams and normalized schemas to manage user, vehicle, and rental data.
  - Wrote optimized SQL queries for complex data joins, validations, and constraints.
  - Used Python scripts to generate test data and validate DB performance on Oracle.`,
    },
    {
      title: 'Automatic Irrigation Control System',
      description: 'Real-time water regulation using soil moisture input and UPPAAL verification.',
      details: `Modeled a fault-tolerant irrigation controller that adjusts valve operations based on moisture levels.
  - Verified logic correctness and timing constraints using UPPAAL.
  - Simulated hardware behavior under varied environmental conditions.`,
    },
    {
      title: 'Face Recognition Door Unlock System',
      description: 'Implemented Azure-based cloud authentication system for secure entry.',
      details: `Captured facial embeddings and compared against encrypted cloud-stored templates.
  - Integrated camera feed with Azure services and local relay modules for door control.
  - Provided web dashboard for user registration and access logs.`,
    },
  ];
  
  export default projects;