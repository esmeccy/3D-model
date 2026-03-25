const model = document.querySelector('#eyeball');

const parts = {
    pupil: {
        orbit: '0.024rad 1.56rad 80m',
        description: 'The pupil is the dark circular aperture at the center of the iris. It regulates how much light enters the eye — dilating in dim conditions and constricting in bright light to protect the retina.',
        hotspots: ['hotspot-2'],
        wikipedia: 'https://en.wikipedia.org/wiki/Pupil'
    },
    iris: {
        orbit: '0.18rad 1.4rad 75.85m',
        description: 'The iris is the pigmented ring surrounding the pupil. Its muscle structure controls pupil diameter, and its unique color and pattern — determined by melanin concentration — make it one of the most individually identifying features of the human body.',
        hotspots: ['hotspot-3'],
        wikipedia: 'https://en.wikipedia.org/wiki/Iris_(anatomy)'
    },
    cornea: {
        orbit: '-0.33rad 1.5rad 80m',
        description: 'The cornea is the transparent, dome-shaped outer surface of the eye. It accounts for roughly two-thirds of the eye\'s total optical power, bending incoming light to focus it precisely onto the retina.',
        hotspots: ['hotspot-4'],
        wikipedia: 'https://en.wikipedia.org/wiki/Cornea'
    },
    sclera: {
        orbit: '1.06rad 1.55rad 80m',
        description: 'The sclera is the dense, fibrous white outer coat of the eyeball. It protects the eye\'s internal structures, maintains its spherical shape, and provides attachment points for the six extraocular muscles that control eye movement.',
        hotspots: ['hotspot-6', 'hotspot-7'],
        wikipedia: 'https://en.wikipedia.org/wiki/Sclera'
    },
    retina: {
        orbit: '3.95rad 1.55rad 80m',
        description: 'The retina is a thin layer of light-sensitive tissue lining the back of the eye. It contains millions of photoreceptors — rods for low-light vision and cones for color — that convert light into electrical signals sent to the brain via the optic nerve.',
        hotspots: ['hotspot-9'],
        wikipedia: 'https://en.wikipedia.org/wiki/Retina'
    }
};

function setActive(partName) {
    const part = parts[partName];
    if (!part) return;

    // Move camera
    model.cameraOrbit = part.orbit;

    // Update description with fade
    const descEl = document.getElementById('description');
    descEl.classList.remove('fade');
    void descEl.offsetWidth; // force reflow to restart animation
    descEl.classList.add('fade');
    document.getElementById('desc-part-name').textContent = partName;
    document.getElementById('desc-text').textContent = part.description;

    // Update Wikipedia link
    const wikiBtn = document.getElementById('wiki-link');
    wikiBtn.href = part.wikipedia;
    wikiBtn.style.display = 'inline-flex';

    // Update active nav button
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(partName).classList.add('active');

    // Update active hotspots
    document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
    part.hotspots.forEach(slot => {
        const hotspot = document.querySelector(`[slot="${slot}"]`);
        if (hotspot) hotspot.classList.add('active');
    });
}

// Nav button listeners
document.querySelectorAll('.btn[data-part]').forEach(btn => {
    btn.addEventListener('click', () => setActive(btn.dataset.part));
});

// Hotspot listeners
document.querySelectorAll('.hotspot[data-part]').forEach(hotspot => {
    hotspot.addEventListener('click', () => setActive(hotspot.dataset.part));
});
