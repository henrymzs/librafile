function StatsCard({ icon, title, value, color }) {
  return (
    <div className="stats-card">
      <div className={`stats-icon ${color}`}>
        {icon}
      </div>
      <div className="stats-content">
        <span className="stats-title">{title}</span>
        <span className={`stats-value ${color}`}>{value}</span>
      </div>
    </div>
  );
}

export default StatsCard;