import { Section } from '@/components/layout/Section';
import { TagList } from '@/components/ui/Tag';
import { skillGroups } from '@/data/skills';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skillGroups.map((group) => (
          <div key={group.name} className="skills__group">
            <h3 className="skills__name">{group.name}</h3>
            <TagList items={group.items} label={group.name} />
          </div>
        ))}
      </div>
    </Section>
  );
}
